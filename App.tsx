import React, { useState, useCallback, useMemo } from 'react';
import { AppView, UserStats, Word, WordProgress } from './types';
import Dashboard from './components/Dashboard';
import FlashcardView from './components/FlashcardView';
import QuizGame from './components/QuizGame';
import useWordData from './hooks/useWordData';
import { SparklesIcon, ArrowDownTrayIcon, ArrowUpTrayIcon } from './components/icons/Icons';
import AddWordView from './components/AddWordView';
import SpellingBeeGame from './components/SpellingBeeGame';
import WordListView from './components/WordListView';
import EditWordView from './components/EditWordView';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.DASHBOARD);
  const [wordToEdit, setWordToEdit] = useState<Word | null>(null);

  const { 
    userStats, 
    wordsForUserLesson,
    learnedWords,
    wordProgress,
    totalWordsLearned,
    wordsLearnedToday,
    wordsLearnedThisWeek,
    userAddedWords,
    allWords,
    updateWordProgress,
    addXpAndCoins,
    isInitialLoading,
    error,
    addUserWord,
    setDailyGoal,
    setWeeklyGoal,
    deleteUserWord,
    updateUserWord,
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

  const handleNavigateToEdit = useCallback((wordId: number) => {
    const word = allWords.find(w => w.id === wordId);
    if (word) {
      setWordToEdit(word);
      setCurrentView(AppView.EDIT_WORD);
    }
  }, [allWords]);

  const handleWordUpdated = useCallback((word: Word) => {
    updateUserWord(word);
    setCurrentView(AppView.WORD_LIST);
  }, [updateUserWord]);

  const handleBackToWordList = useCallback(() => {
    setCurrentView(AppView.WORD_LIST);
  }, []);

  const handleDeleteWord = useCallback((wordId: number) => {
    if (window.confirm('이 단어를 정말로 삭제하시겠습니까? 학습 기록도 함께 사라집니다.')) {
        deleteUserWord(wordId);
    }
  }, [deleteUserWord]);

  const handleBackupData = useCallback(() => {
    try {
      const words = localStorage.getItem('danzzak-words');
      const progress = localStorage.getItem('danzzak-progress');
      const stats = localStorage.getItem('danzzak-stats');

      if (!words || !progress || !stats) {
        alert('백업할 데이터가 없습니다.');
        return;
      }

      const backupData = {
        words: JSON.parse(words),
        progress: JSON.parse(progress),
        stats: JSON.parse(stats),
      };

      const dataStr = JSON.stringify(backupData, null, 2);
      const dataBlob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(dataBlob);

      const link = document.createElement('a');
      link.href = url;
      const date = new Date().toISOString().slice(0, 10);
      link.download = `danzzak_backup_${date}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error('백업 실패:', e);
      alert('데이터 백업 중 오류가 발생했습니다.');
    }
  }, []);

  const handleRestoreData = useCallback(() => {
    if (!window.confirm('데이터를 가져오면 현재 학습 기록이 모두 교체됩니다. 계속하시겠습니까?')) {
      return;
    }

    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const result = event.target?.result as string;
          const restoredData = JSON.parse(result);

          if (restoredData.words && restoredData.progress && restoredData.stats) {
            localStorage.setItem('danzzak-words', JSON.stringify(restoredData.words));
            localStorage.setItem('danzzak-progress', JSON.stringify(restoredData.progress));
            localStorage.setItem('danzzak-stats', JSON.stringify(restoredData.stats));
            alert('데이터를 성공적으로 가져왔습니다. 앱을 새로고침합니다.');
            window.location.reload();
          } else {
            alert('선택한 파일이 올바른 백업 파일이 아닙니다.');
          }
        } catch (err) {
          console.error('복원 실패:', err);
          alert('데이터 복원 중 오류가 발생했습니다.');
        }
      };
      reader.readAsText(file);
    };
    input.click();
  }, []);


  const gameWordsForUser = useMemo(() => {
    return [...userAddedWords].sort(() => 0.5 - Math.random()).slice(0, 10);
  }, [userAddedWords]);


  const renderHeader = (stats: UserStats) => (
    <header className="bg-slate-800/80 backdrop-blur-sm shadow-md sticky top-0 z-10 p-4">
      <div className="max-w-7xl mx-auto grid grid-cols-3 items-center">
        <div>{/* Spacer */}</div>
        <div className="flex items-center gap-2 justify-center whitespace-nowrap">
          <SparklesIcon className="w-8 h-8 text-blue-500" />
          <h1 className="text-xl md:text-2xl font-extrabold text-white">단짝-단어 암기 친구</h1>
        </div>
        <div className="flex items-center gap-2 justify-self-end">
            <button 
                onClick={handleBackupData}
                className="flex items-center gap-2 px-3 py-2 text-sm font-bold text-white bg-indigo-500 rounded-md shadow-sm hover:bg-indigo-600 transition-colors"
                title="데이터 백업하기"
            >
                <ArrowDownTrayIcon className="w-4 h-4" />
                <span className="hidden md:inline">데이터 백업</span>
            </button>
            <button 
                onClick={handleRestoreData}
                className="flex items-center gap-2 px-3 py-2 text-sm font-bold text-white bg-rose-500 rounded-md shadow-sm hover:bg-rose-600 transition-colors"
                title="데이터 가져오기"
            >
                <ArrowUpTrayIcon className="w-4 h-4" />
                <span className="hidden md:inline">데이터 가져오기</span>
            </button>
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
        return <WordListView 
          words={allWords} 
          progress={wordProgress} 
          onBack={handleBack}
          onEdit={handleNavigateToEdit}
          onDelete={handleDeleteWord}
        />;
      case AppView.EDIT_WORD:
        return wordToEdit ? <EditWordView 
          wordToEdit={wordToEdit}
          onUpdateWord={handleWordUpdated}
          onBack={handleBackToWordList}
        /> : null;
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
          allWordsCount={allWords.length}
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