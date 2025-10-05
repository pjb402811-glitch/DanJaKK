import React, { useState, useCallback, useMemo } from 'react';
import { AppView, UserStats, Word, WordProgress } from './types';
import Dashboard from './components/Dashboard';
import FlashcardView from './components/FlashcardView';
import QuizGame from './components/QuizGame';
import useWordData from './hooks/useWordData';
import { SparklesIcon } from './components/icons/Icons';
import AddWordView from './components/AddWordView';
import SpellingBeeGame from './components/SpellingBeeGame';
import WordListView from './components/WordListView';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.DASHBOARD);
  const { 
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
  } = useWordData();

  const handleNavigate = useCallback((view: AppView) => {
    setCurrentView(view);
  }, []);
  
  const handleSessionComplete = useCallback((xp: number, coins: number) => {
    addXpAndCoins(xp, coins);
    setCurrentView(AppView.DASHBOARD);
  }, [addXpAndCoins]);

  const handleBack = useCallback(() => {
    setCurrentView(AppView.DASHBOARD);
  }, []);

  const handleWordAdded = useCallback((word: Omit<Word, 'id'>) => {
    addUserWord(word);
    setCurrentView(AppView.DASHBOARD);
  }, [addUserWord]);

  const gameWordsForUser = useMemo(() => {
    return [...userAddedWords].sort(() => 0.5 - Math.random()).slice(0, 10);
  }, [userAddedWords]);


  const renderHeader = (stats: UserStats) => (
    <header className="bg-slate-800/80 backdrop-blur-sm shadow-md sticky top-0 z-10 p-4">
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        <div className="flex items-center gap-2">
          <SparklesIcon className="w-8 h-8 text-blue-500" />
          <h1 className="text-xl md:text-2xl font-extrabold text-white">단짝-단어 암기 친구</h1>
        </div>
      </div>
    </header>
  );

  const renderContent = () => {
    if (isInitialLoading) {
      return <div className="flex justify-center items-center h-64"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div></div>;
    }

    if (error) {
       return <div className="text-center text-red-500 p-8">{error}</div>;
    }
    
    switch (currentView) {
      case AppView.REVIEW:
        return <FlashcardView words={learnedWords} updateWordProgress={updateWordProgress} onComplete={handleSessionComplete} isReview={true} onBack={handleBack} />;
      case AppView.USER_WORD_FLASHCARDS:
        return <FlashcardView words={wordsForUserLesson} updateWordProgress={updateWordProgress} onComplete={handleSessionComplete} onBack={handleBack} />;
      case AppView.QUIZ:
        return <QuizGame words={gameWordsForUser} onComplete={handleSessionComplete} onBack={handleBack} />;
      case AppView.ADD_WORD:
        return <AddWordView onAddWord={handleWordAdded} onBack={handleBack} />;
      case AppView.SPELLING_BEE:
        return <SpellingBeeGame words={gameWordsForUser} onComplete={handleSessionComplete} onBack={handleBack} />;
      case AppView.WORD_LIST:
        return <WordListView words={learnedWords} progress={wordProgress} onBack={handleBack} />;
      case AppView.DASHBOARD:
      default:
        return <Dashboard 
          stats={userStats} 
          onNavigate={handleNavigate} 
          reviewCount={learnedWords.length} 
          userWordCount={wordsForUserLesson.length}
          userAddedWordsCount={userAddedWords.length}
          onSetDailyGoal={setDailyGoal}
          onSetWeeklyGoal={setWeeklyGoal}
          totalWordsLearned={totalWordsLearned}
          wordsLearnedToday={wordsLearnedToday}
          wordsLearnedThisWeek={wordsLearnedThisWeek}
        />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200">
      {renderHeader(userStats)}
      <main className="max-w-7xl mx-auto p-4 md:p-6">
        {renderContent()}
      </main>
      <footer className="text-center p-4 text-xs text-slate-500">
      </footer>
    </div>
  );
};

export default App;