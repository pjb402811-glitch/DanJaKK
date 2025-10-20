import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Word, WordProgress, HanjaCharacter, HanjaCharacterProgress, UserStats, Conversation, ConversationProgress } from '../types';
import { generateInitialWords, generateInitialCharacters, generateInitialConversations } from '../services/geminiService';

const NEW_ITEMS_PER_LESSON = 5;
const CHARACTERS_PER_GROUP = 4;

const REVIEW_INTERVALS = [1, 2, 7, 14, 30, 60, 120]; // in days

const getNextReviewDate = (streak: number): string => {
  const interval = REVIEW_INTERVALS[Math.min(streak, REVIEW_INTERVALS.length - 1)];
  const date = new Date();
  date.setDate(date.getDate() + interval);
  date.setHours(0, 0, 0, 0);
  return date.toISOString();
};

const isToday = (someDateStr: string) => {
  if (!someDateStr) return false;
  const someDate = new Date(someDateStr);
  const today = new Date();
  return someDate.getDate() === today.getDate() &&
    someDate.getMonth() === today.getMonth() &&
    someDate.getFullYear() === today.getFullYear();
};

const isThisWeek = (someDateStr: string) => {
    if (!someDateStr) return false;
    const someDate = new Date(someDateStr);
    const today = new Date();
    const firstDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
    firstDayOfWeek.setHours(0,0,0,0);
    const lastDayOfWeek = new Date(firstDayOfWeek);
    lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 6);
    lastDayOfWeek.setHours(23,59,59,999);

    return someDate >= firstDayOfWeek && someDate <= lastDayOfWeek;
}

const useLearningData = () => {
  const [userStats, setUserStats] = useState<UserStats>({ xp: 0, coins: 0, dailyGoal: 10, weeklyGoal: 50, lastLogin: new Date().toISOString() });
  const [allWords, setAllWords] = useState<Word[]>([]);
  const [wordProgress, setWordProgress] = useState<Record<number, WordProgress>>({});

  const [allCharacters, setAllCharacters] = useState<HanjaCharacter[]>([]);
  const [characterProgress, setCharacterProgress] = useState<Record<number, HanjaCharacterProgress>>({});

  const [allConversations, setAllConversations] = useState<Conversation[]>([]);
  const [conversationProgress, setConversationProgress] = useState<Record<number, ConversationProgress>>({});

  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      // Load user stats
      const savedStats = localStorage.getItem('danzzak-stats');
      if (savedStats) {
        setUserStats(JSON.parse(savedStats));
      }

      // Load words and progress
      const savedWords = localStorage.getItem('danzzak-words');
      const savedProgress = localStorage.getItem('danzzak-progress');
      if (savedWords && savedProgress) {
        setAllWords(JSON.parse(savedWords));
        setWordProgress(JSON.parse(savedProgress));
      } else {
        const initialWords = generateInitialWords();
        setAllWords(initialWords);
        const initialProgress: Record<number, WordProgress> = {};
        initialWords.forEach(word => {
          initialProgress[word.id] = { wordId: word.id, correct: 0, incorrect: 0, lastReviewed: null, nextReview: null, streak: 0 };
        });
        setWordProgress(initialProgress);
      }
       // Load Hanja characters and progress
       const savedCharacters = localStorage.getItem('danzzak-characters');
       const savedCharProgress = localStorage.getItem('danzzak-character-progress');
       if (savedCharacters && savedCharProgress) {
         setAllCharacters(JSON.parse(savedCharacters));
         setCharacterProgress(JSON.parse(savedCharProgress));
       } else {
         const initialChars = generateInitialCharacters();
         setAllCharacters(initialChars);
         const initialCharProgress: Record<number, HanjaCharacterProgress> = {};
         initialChars.forEach(char => {
           initialCharProgress[char.id] = { characterId: char.id, correct: 0, incorrect: 0, lastReviewed: null, nextReview: null, streak: 0 };
         });
         setCharacterProgress(initialCharProgress);
       }

      const savedConversations = localStorage.getItem('danzzak-conversations');
      const savedConversationProgress = localStorage.getItem('danzzak-conversation-progress');
      if (savedConversations && savedConversationProgress) {
        setAllConversations(JSON.parse(savedConversations));
        setConversationProgress(JSON.parse(savedConversationProgress));
      } else {
        const initialConversations = generateInitialConversations();
        setAllConversations(initialConversations);
        const initialProgress: Record<number, ConversationProgress> = {};
        initialConversations.forEach(convo => {
          initialProgress[convo.id] = { conversationId: convo.id, correct: 0, incorrect: 0, lastReviewed: null, nextReview: null, streak: 0 };
        });
        setConversationProgress(initialProgress);
      }

    } catch (e) {
      setError('데이터를 불러오는 중 오류가 발생했습니다.');
      console.error(e);
    } finally {
      setIsInitialLoading(false);
    }
  }, []);

  useEffect(() => { localStorage.setItem('danzzak-stats', JSON.stringify(userStats)); }, [userStats]);
  useEffect(() => { localStorage.setItem('danzzak-words', JSON.stringify(allWords)); }, [allWords]);
  useEffect(() => { localStorage.setItem('danzzak-progress', JSON.stringify(wordProgress)); }, [wordProgress]);
  useEffect(() => { localStorage.setItem('danzzak-characters', JSON.stringify(allCharacters)); }, [allCharacters]);
  useEffect(() => { localStorage.setItem('danzzak-character-progress', JSON.stringify(characterProgress)); }, [characterProgress]);
  useEffect(() => { localStorage.setItem('danzzak-conversations', JSON.stringify(allConversations)); }, [allConversations]);
  useEffect(() => { localStorage.setItem('danzzak-conversation-progress', JSON.stringify(conversationProgress)); }, [conversationProgress]);

  const updateWordProgress = useCallback((wordId: number, isCorrect: boolean) => {
    setWordProgress(prev => {
      const progress = { ...prev[wordId] };
      const now = new Date().toISOString();
      progress.lastReviewed = now;

      if (isCorrect) {
        progress.correct++;
        progress.streak++;
      } else {
        progress.incorrect++;
        progress.streak = 0;
      }
      progress.nextReview = getNextReviewDate(progress.streak);
      return { ...prev, [wordId]: progress };
    });
  }, []);

  const updateCharacterProgress = useCallback((characterId: number, isCorrect: boolean) => {
    setCharacterProgress(prev => {
      const progress = { ...prev[characterId] };
      const now = new Date().toISOString();
      progress.lastReviewed = now;
      if (isCorrect) {
        progress.correct++;
        progress.streak++;
      } else {
        progress.incorrect++;
        progress.streak = 0;
      }
      progress.nextReview = getNextReviewDate(progress.streak);
      return { ...prev, [characterId]: progress };
    });
  }, []);

  const updateConversationProgress = useCallback((conversationId: number, isCorrect: boolean) => {
    setConversationProgress(prev => {
      const progress = { ...prev[conversationId] };
      const now = new Date().toISOString();
      progress.lastReviewed = now;

      if (isCorrect) {
        progress.correct++;
        progress.streak++;
      } else {
        progress.incorrect++;
        progress.streak = 0;
      }
      progress.nextReview = getNextReviewDate(progress.streak);
      return { ...prev, [conversationId]: progress };
    });
  }, []);

  const addXpAndCoins = useCallback((xp: number, coins: number) => {
    setUserStats(prev => ({ ...prev, xp: prev.xp + xp, coins: prev.coins + coins }));
  }, []);

  const addUserWord = useCallback((word: Omit<Word, 'id'>) => {
    setAllWords(prev => {
      const newId = Math.max(0, ...prev.map(w => w.id)) + 1;
      const newWord = { ...word, id: newId, isUserAdded: true };
      
      setWordProgress(progPrev => ({
        ...progPrev,
        [newId]: { wordId: newId, correct: 0, incorrect: 0, lastReviewed: null, nextReview: null, streak: 0 }
      }));

      return [...prev, newWord];
    });
  }, []);

  const addUserConversation = useCallback((convo: Omit<Conversation, 'id'>) => {
    setAllConversations(prev => {
      const newId = Math.max(0, ...prev.map(c => c.id)) + 1;
      const newConversation = { ...convo, id: newId, isUserAdded: true };
      
      setConversationProgress(progPrev => ({
        ...progPrev,
        [newId]: { conversationId: newId, correct: 0, incorrect: 0, lastReviewed: null, nextReview: null, streak: 0 }
      }));

      return [...prev, newConversation];
    });
  }, []);

  const updateUserWord = useCallback((word: Word) => {
    setAllWords(prev => prev.map(w => w.id === word.id ? word : w));
  }, []);

  const updateUserConversation = useCallback((convo: Conversation) => {
    setAllConversations(prev => prev.map(c => c.id === convo.id ? convo : c));
  }, []);

  const deleteUserWord = useCallback((wordId: number) => {
    setAllWords(prev => prev.filter(w => w.id !== wordId));
    setWordProgress(prev => {
        const newProgress = {...prev};
        delete newProgress[wordId];
        return newProgress;
    });
  }, []);

  const deleteUserConversation = useCallback((conversationId: number) => {
    setAllConversations(prev => prev.filter(c => c.id !== conversationId));
    setConversationProgress(prev => {
        const newProgress = {...prev};
        delete newProgress[conversationId];
        return newProgress;
    });
  }, []);

  const setDailyGoal = useCallback((goal: number) => setUserStats(prev => ({...prev, dailyGoal: goal})), []);
  const setWeeklyGoal = useCallback((goal: number) => setUserStats(prev => ({...prev, weeklyGoal: goal})), []);

  const userAddedWords = useMemo(() => allWords.filter(w => w.isUserAdded), [allWords]);

  const wordsForUserLesson = useMemo(() => {
    return userAddedWords
      .filter(word => !wordProgress[word.id]?.lastReviewed)
      .slice(0, NEW_ITEMS_PER_LESSON);
  }, [userAddedWords, wordProgress]);

  const userAddedConversations = useMemo(() => allConversations.filter(c => c.isUserAdded), [allConversations]);

  const conversationsForLesson = useMemo(() => {
    return allConversations
      .filter(convo => !conversationProgress[convo.id]?.lastReviewed)
      .slice(0, NEW_ITEMS_PER_LESSON);
  }, [allConversations, conversationProgress]);

  const charactersForLesson = useMemo(() => {
    const firstUnlearned = allCharacters.find(char => (characterProgress[char.id]?.streak || 0) === 0);
    if (!firstUnlearned) return [];
    
    const groupIndex = Math.floor((firstUnlearned.id - 1) / CHARACTERS_PER_GROUP);
    return allCharacters.slice(groupIndex * CHARACTERS_PER_GROUP, groupIndex * CHARACTERS_PER_GROUP + CHARACTERS_PER_GROUP);

  }, [allCharacters, characterProgress]);
  
  const learnedCharacters = useMemo(() => {
    return allCharacters.filter(char => (characterProgress[char.id]?.lastReviewed));
  }, [allCharacters, characterProgress]);

  const learnedConversations = useMemo(() => {
    return allConversations.filter(c => (conversationProgress[c.id]?.lastReviewed));
  }, [allConversations, conversationProgress]);

  const learnedGroups = useMemo(() => {
    const learnedCharacterIds = new Set(learnedCharacters.map(c => c.id));
    const groups: HanjaCharacter[][] = [];
    for (let i = 0; i < allCharacters.length; i += 4) {
        const group = allCharacters.slice(i, i + 4);
        if (group.every(char => learnedCharacterIds.has(char.id))) {
            groups.push(group);
        }
    }
    return groups;
  }, [allCharacters, learnedCharacters]);

  const learningStats = useMemo(() => {
    const englishStats = { learnedToday: 0, learnedThisWeek: 0, totalLearned: 0 };
    const hanjaStats = { learnedToday: 0, learnedThisWeek: 0, totalLearned: 0 };
    const conversationStats = { learnedToday: 0, learnedThisWeek: 0, totalLearned: 0 };

    (Object.values(wordProgress) as WordProgress[]).forEach(p => {
      if (p.lastReviewed) {
        englishStats.totalLearned++;
        if (isToday(p.lastReviewed)) englishStats.learnedToday++;
        if (isThisWeek(p.lastReviewed)) englishStats.learnedThisWeek++;
      }
    });

    (Object.values(characterProgress) as HanjaCharacterProgress[]).forEach(p => {
        if (p.lastReviewed) {
            hanjaStats.totalLearned++;
            if(isToday(p.lastReviewed)) hanjaStats.learnedToday++;
            if(isThisWeek(p.lastReviewed)) hanjaStats.learnedThisWeek++;
        }
    });

    (Object.values(conversationProgress) as ConversationProgress[]).forEach(p => {
      if (p.lastReviewed) {
          conversationStats.totalLearned++;
          if(isToday(p.lastReviewed)) conversationStats.learnedToday++;
          if(isThisWeek(p.lastReviewed)) conversationStats.learnedThisWeek++;
      }
    });

    return { englishStats, hanjaStats, conversationStats };
  }, [wordProgress, characterProgress, conversationProgress]);

  const unlearnedCharactersCount = useMemo(() => {
    return allCharacters.filter(c => (characterProgress[c.id]?.streak || 0) === 0).length;
  }, [allCharacters, characterProgress]);

  const englishReviewCount = useMemo(() => {
    const now = new Date();
    return allWords.filter(word => {
      const progress = wordProgress[word.id];
      return progress?.nextReview && new Date(progress.nextReview) <= now;
    }).length;
  }, [allWords, wordProgress]);

  const hanjaReviewCount = useMemo(() => {
    const now = new Date();
    return (Object.values(characterProgress) as HanjaCharacterProgress[]).filter(p => p.nextReview && new Date(p.nextReview) <= now).length;
  }, [characterProgress]);


  return {
    userStats,
    wordsForUserLesson,
    wordProgress,
    userAddedWords,
    allWords,
    learningStats,
    updateWordProgress,
    addXpAndCoins,
    isInitialLoading,
    error,
    addUserWord,
    setDailyGoal,
    setWeeklyGoal,
    deleteUserWord,
    updateUserWord,
    charactersForLesson,
    updateCharacterProgress,
    allCharacters,
    characterProgress,
    learnedCharacters,
    learnedGroups,
    englishReviewCount,
    hanjaReviewCount,
    unlearnedCharactersCount,
    allConversations,
    conversationProgress,
    userAddedConversations,
    conversationsForLesson,
    learnedConversations,
    updateConversationProgress,
    addUserConversation,
    updateUserConversation,
    deleteUserConversation,
  };
};

export default useLearningData;