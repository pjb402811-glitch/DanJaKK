import { useState, useEffect, useCallback, useMemo } from 'react';
import { Word, WordProgress, UserStats } from '../types';
import { generateInitialWords } from '../services/geminiService';

const NEW_WORDS_PER_LESSON = 5;

// Simple forgetting curve intervals (in days)
const STREAK_INTERVALS = [1, 2, 4, 8, 16, 32, 64];

const LOCAL_STORAGE_KEYS = {
  WORDS: 'danzzak-words',
  PROGRESS: 'danzzak-progress',
  STATS: 'danzzak-stats',
};

const useWordData = () => {
  const [allWords, setAllWords] = useState<Word[]>(() => {
    try {
      const savedWords = window.localStorage.getItem(LOCAL_STORAGE_KEYS.WORDS);
      if (savedWords) {
        return JSON.parse(savedWords);
      }
    } catch (error) {
      console.error('Error loading words from localStorage', error);
    }
    return generateInitialWords();
  });

  const [wordProgress, setWordProgress] = useState<Record<number, WordProgress>>(() => {
    try {
      const savedProgress = window.localStorage.getItem(LOCAL_STORAGE_KEYS.PROGRESS);
      if (savedProgress) {
        const parsed = JSON.parse(savedProgress);
        // Revive date strings into Date objects
        Object.values(parsed).forEach((progress: any) => {
          if (progress.lastReviewed) progress.lastReviewed = new Date(progress.lastReviewed);
          if (progress.nextReview) progress.nextReview = new Date(progress.nextReview);
        });
        return parsed;
      }
    } catch (error) {
      console.error('Error loading progress from localStorage', error);
    }
    // Initialize progress for initial words if none is saved
    const initialProgress: Record<number, WordProgress> = {};
      allWords.forEach(word => {
        if (!initialProgress[word.id]) {
            initialProgress[word.id] = {
            wordId: word.id,
            streak: 0,
            lastReviewed: null,
            nextReview: new Date(0),
            correct: 0,
            incorrect: 0,
            };
        }
      });
      return initialProgress;
  });
  
  const [userStats, setUserStats] = useState<UserStats>(() => {
    try {
      const savedStats = window.localStorage.getItem(LOCAL_STORAGE_KEYS.STATS);
      if (savedStats) {
        return JSON.parse(savedStats);
      }
    } catch (error) {
      console.error('Error loading stats from localStorage', error);
    }
    return {
      level: 1,
      xp: 0,
      xpToNextLevel: 100,
      coins: 50,
      dailyGoal: 10,
      weeklyGoal: 50,
    };
  });

  const [isInitialLoading, setIsInitialLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    try {
      window.localStorage.setItem(LOCAL_STORAGE_KEYS.WORDS, JSON.stringify(allWords));
      window.localStorage.setItem(LOCAL_STORAGE_KEYS.PROGRESS, JSON.stringify(wordProgress));
      window.localStorage.setItem(LOCAL_STORAGE_KEYS.STATS, JSON.stringify(userStats));
    } catch (error) {
      console.error('Error saving to localStorage', error);
    }
  }, [allWords, wordProgress, userStats]);


  const updateWordProgress = useCallback((wordId: number, isCorrect: boolean) => {
    setWordProgress(prev => {
      const progress = { ...(prev[wordId] || {
        wordId: wordId,
        streak: 0,
        lastReviewed: null,
        nextReview: new Date(0),
        correct: 0,
        incorrect: 0,
      }) };
      const now = new Date();
      
      progress.lastReviewed = now;
      
      if (isCorrect) {
        progress.streak += 1;
        progress.correct += 1;
      } else {
        progress.streak = 0;
        progress.incorrect += 1;
      }

      const intervalDays = STREAK_INTERVALS[Math.min(progress.streak, STREAK_INTERVALS.length - 1)] || 1;
      const nextReviewDate = new Date(now);
      nextReviewDate.setDate(now.getDate() + intervalDays);
      
      progress.nextReview = nextReviewDate;
      
      return { ...prev, [wordId]: progress };
    });
  }, []);
  
  const addXpAndCoins = useCallback((xp: number, coins: number) => {
    setUserStats(prev => {
      let newXp = prev.xp + xp;
      let newLevel = prev.level;
      let newXpToNextLevel = prev.xpToNextLevel;

      while (newXp >= newXpToNextLevel) {
        newXp -= newXpToNextLevel;
        newLevel += 1;
        newXpToNextLevel = Math.floor(newXpToNextLevel * 1.5);
      }
      
      return {
        ...prev,
        level: newLevel,
        xp: newXp,
        xpToNextLevel: newXpToNextLevel,
        coins: prev.coins + coins,
      };
    });
  }, []);

  const addUserWord = useCallback((wordData: Omit<Word, 'id'>) => {
    setAllWords(prev => {
      const newId = prev.length > 0 ? Math.max(...prev.map(w => w.id)) + 1 : 1;
      const newWord: Word = { id: newId, ...wordData, isUserAdded: true };
      
      setWordProgress(progressPrev => ({
        ...progressPrev,
        [newId]: {
          wordId: newId,
          streak: 0,
          lastReviewed: null,
          nextReview: new Date(0),
          correct: 0,
          incorrect: 0,
        }
      }));
      
      return [...prev, newWord];
    });
  }, []);

  const setDailyGoal = useCallback((newGoal: number) => {
    if (newGoal > 0) {
      setUserStats(prev => ({...prev, dailyGoal: newGoal}));
    }
  }, []);
  
  const setWeeklyGoal = useCallback((newGoal: number) => {
    if (newGoal > 0) {
      setUserStats(prev => ({...prev, weeklyGoal: newGoal}));
    }
  }, []);

  const learnedWords = useMemo(() => {
    const learnedIds = new Set(Object.values(wordProgress).filter(p => p.lastReviewed).map(p => p.wordId));
    return allWords.filter(w => learnedIds.has(w.id));
  }, [allWords, wordProgress]);

  const userAddedWords = useMemo(() => {
    return allWords.filter(w => w.isUserAdded);
  }, [allWords]);


  const { totalWordsLearned, wordsLearnedToday, wordsLearnedThisWeek } = useMemo(() => {
    const isSameDay = (d1: Date, d2: Date) =>
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate();

    const getStartOfWeek = (date: Date) => {
      const d = new Date(date);
      const day = d.getDay();
      const diff = d.getDate() - day + (day === 0 ? -6 : 1); // Adjust when day is Sunday for Monday start
      const startOfWeek = new Date(d.setDate(diff));
      startOfWeek.setHours(0, 0, 0, 0);
      return startOfWeek;
    };
    
    const todayDate = new Date();
    const startOfWeekDate = getStartOfWeek(todayDate);

    const progressValues = Object.values(wordProgress);
    const learnedWordsProgress = progressValues.filter(p => p.lastReviewed);
    
    const learnedTodayProgress = learnedWordsProgress.filter(p => p.lastReviewed && isSameDay(p.lastReviewed, todayDate));
    const learnedThisWeekProgress = learnedWordsProgress.filter(p => p.lastReviewed && p.lastReviewed >= startOfWeekDate);
    
    return {
      totalWordsLearned: learnedWordsProgress.length,
      wordsLearnedToday: learnedTodayProgress.length,
      wordsLearnedThisWeek: learnedThisWeekProgress.length,
    };
  }, [wordProgress]);


  const learnedWordIds = new Set(Object.values(wordProgress).filter(p => p.lastReviewed).map(p => p.wordId));
  
  const newUserWords = allWords.filter(word => !learnedWordIds.has(word.id) && word.isUserAdded);
  const wordsForUserLesson = newUserWords.slice(0, NEW_WORDS_PER_LESSON);

  return { 
    userStats, 
    wordsForUserLesson,
    learnedWords,
    wordProgress,
    totalWordsLearned,
    wordsLearnedToday,
    wordsLearnedThisWeek,
    userAddedWords,
    updateWordProgress,
    addXpAndCoins,
    isInitialLoading,
    error,
    addUserWord,
    setDailyGoal,
    setWeeklyGoal,
  };
};

export default useWordData;