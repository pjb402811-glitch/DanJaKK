
import React, { useState, useMemo, useCallback } from 'react';
import { AppView, UserStats, Word, HanjaCharacter, LearningMode, Conversation, ConversationProgress, WordProgress, HanjaCharacterProgress, Idiom, IdiomProgress } from './types';
import Dashboard from './components/Dashboard';
import FlashcardView from './components/FlashcardView';
import QuizGame from './components/QuizGame';
import useLearningData from './hooks/useWordData';
import { SparklesIcon, ArrowDownTrayIcon, ArrowUpTrayIcon } from './components/icons/Icons';
import AddWordView from './components/AddWordView';
import SpellingBeeGame from './components/SpellingBeeGame';
import WordListView from './components/WordListView';
import EditWordView from './components/EditWordView';
import CheonjamunFlashcardView from './components/CheonjamunFlashcardView';
import CheonjamunListView from './components/CheonjamunListView';
import TopNav from './components/TopNav';
import HanjaQuizView from './components/HanjaQuizView';
import FourCharQuizView from './components/FourCharQuizView';

import AddConversationView from './components/AddConversationView';
import ConversationFlashcardView from './components/ConversationFlashcardView';
import ConversationQuizGame from './components/ConversationQuizGame';
import ConversationListView from './components/ConversationListView';
import EditConversationView from './components/EditConversationView';


const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.DASHBOARD);
  const [wordToEdit, setWordToEdit] = useState<Word | null>(null);
  const [activeMode, setActiveMode] = useState<LearningMode>('ENGLISH');
  const [singleWordForFlashcard, setSingleWordForFlashcard] = useState<Word[]>([]);
  const [singleHanjaGroupForFlashcard, setSingleHanjaGroupForFlashcard] = useState<HanjaCharacter[]>([]);
  const [conversationToEdit, setConversationToEdit] = useState<Conversation | null>(null);
  const [singleConversationForFlashcard, setSingleConversationForFlashcard] = useState<Conversation[]>([]);
  
  const [priorityWordToEdit, setPriorityWordToEdit] = useState<Word | null>(null);
  const [singlePriorityWordForFlashcard, setSinglePriorityWordForFlashcard] = useState<Word[]>([]);

  const [idiomToEdit, setIdiomToEdit] = useState<Idiom | null>(null);
  const [singleIdiomForFlashcard, setSingleIdiomForFlashcard] = useState<Idiom[]>([]);

  const { 
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
    allPriorityWords,
    priorityWordProgress,
    priorityWordsForLesson,
    addPriorityWord,
    updatePriorityWord,
    deletePriorityWord,
    updatePriorityWordProgress,
    learnedPriorityWords,
    allIdioms,
    idiomProgress,
    idiomsForLesson,
    learnedIdioms,
    addIdiom,
    updateIdiom,
    deleteIdiom,
    updateIdiomProgress,
  } = useLearningData();

  const handleNavigate = useCallback((view: AppView) => {
    setCurrentView(view);
  }, []);

  const handleModeChange = useCallback((mode: LearningMode) => {
    setActiveMode(mode);
    setCurrentView(AppView.DASHBOARD);
  }, []);
  
  const handleSessionComplete = useCallback((xp: number, coins: number) => {
    addXpAndCoins(xp, coins);
    setCurrentView(AppView.DASHBOARD);
  }, [addXpAndCoins]);

  const handleReviewSessionComplete = useCallback((xp: number, coins: number) => {
    addXpAndCoins(xp, coins);
    setCurrentView(AppView.WORD_LIST);
  }, [addXpAndCoins]);
  
  const handleReviewHanjaSessionComplete = useCallback((xp: number, coins: number) => {
    addXpAndCoins(xp, coins);
    setCurrentView(AppView.CHEONJAMUN_LIST);
  }, [addXpAndCoins]);

  const handleReviewConversationSessionComplete = useCallback((xp: number, coins: number) => {
    addXpAndCoins(xp, coins);
    setCurrentView(AppView.CONVERSATION_LIST);
  }, [addXpAndCoins]);

  const handleReviewPrioritySessionComplete = useCallback((xp: number, coins: number) => {
    addXpAndCoins(xp, coins);
    setCurrentView(AppView.PRIORITY_LIST);
  }, [addXpAndCoins]);
  
  const handleReviewIdiomSessionComplete = useCallback((xp: number, coins: number) => {
    addXpAndCoins(xp, coins);
    setCurrentView(AppView.IDIOM_LIST);
  }, [addXpAndCoins]);
  
  const handleBack = useCallback(() => {
    setCurrentView(AppView.DASHBOARD);
  }, []);

  const handleWordAdded = useCallback((word: Omit<Word, 'id'>) => {
    addUserWord(word);
    setCurrentView(AppView.DASHBOARD);
  }, [addUserWord]);

  const handleConversationAdded = useCallback((conversation: Omit<Conversation, 'id'>) => {
    addUserConversation(conversation);
    setCurrentView(AppView.DASHBOARD);
  }, [addUserConversation]);
  
  const handlePriorityWordAdded = useCallback((word: Omit<Word, 'id'>) => {
    addPriorityWord(word);
    setCurrentView(AppView.DASHBOARD);
  }, [addPriorityWord]);

  const handleIdiomAdded = useCallback((idiom: Omit<Idiom, 'id'>) => {
    addIdiom(idiom);
    setCurrentView(AppView.DASHBOARD);
  }, [addIdiom]);

  const handleNavigateToEdit = useCallback((wordId: number) => {
    const word = allWords.find(w => w.id === wordId);
    if (word) {
      setWordToEdit(word);
      setCurrentView(AppView.EDIT_WORD);
    }
  }, [allWords]);
  
  const handleNavigateToEditConversation = useCallback((conversationId: number) => {
    const conversation = allConversations.find(c => c.id === conversationId);
    if (conversation) {
      setConversationToEdit(conversation);
      setCurrentView(AppView.EDIT_CONVERSATION);
    }
  }, [allConversations]);
  
  const handleNavigateToEditPriority = useCallback((wordId: number) => {
    const word = allPriorityWords.find(w => w.id === wordId);
    if (word) {
      setPriorityWordToEdit(word);
      setCurrentView(AppView.EDIT_PRIORITY_WORD);
    }
  }, [allPriorityWords]);

  const handleNavigateToEditIdiom = useCallback((idiomId: number) => {
    const idiom = allIdioms.find(i => i.id === idiomId);
    if (idiom) {
      setIdiomToEdit(idiom);
      setCurrentView(AppView.EDIT_IDIOM);
    }
  }, [allIdioms]);


  const handleStartSingleWordFlashcard = useCallback((wordId: number) => {
    const word = allWords.find(w => w.id === wordId);
    if (word) {
        setSingleWordForFlashcard([word]);
        setCurrentView(AppView.REVIEW_SINGLE_WORD_FLASHCARD);
    }
  }, [allWords]);

  const handleStartSingleHanjaGroupFlashcard = useCallback((characters: HanjaCharacter[]) => {
    setSingleHanjaGroupForFlashcard(characters);
    setCurrentView(AppView.REVIEW_SINGLE_HANJA_GROUP_FLASHCARD);
  }, []);

  const handleStartSingleConversationFlashcard = useCallback((conversationId: number) => {
    const conversation = allConversations.find(c => c.id === conversationId);
    if (conversation) {
        setSingleConversationForFlashcard([conversation]);
        setCurrentView(AppView.REVIEW_SINGLE_CONVERSATION_FLASHCARD);
    }
  }, [allConversations]);
  
  const handleStartSinglePriorityFlashcard = useCallback((wordId: number) => {
    const word = allPriorityWords.find(w => w.id === wordId);
    if (word) {
        setSinglePriorityWordForFlashcard([word]);
        setCurrentView(AppView.REVIEW_SINGLE_PRIORITY_WORD_FLASHCARD);
    }
  }, [allPriorityWords]);

  const handleStartSingleIdiomFlashcard = useCallback((idiomId: number) => {
    const idiom = allIdioms.find(i => i.id === idiomId);
    if (idiom) {
        setSingleIdiomForFlashcard([idiom]);
        setCurrentView(AppView.REVIEW_SINGLE_IDIOM_FLASHCARD);
    }
  }, [allIdioms]);

  const handleWordUpdated = useCallback((word: Word) => {
    updateUserWord(word);
    setCurrentView(AppView.WORD_LIST);
  }, [updateUserWord]);

  const handleConversationUpdated = useCallback((conversation: Conversation) => {
    updateUserConversation(conversation);
    setCurrentView(AppView.CONVERSATION_LIST);
  }, [updateUserConversation]);
  
  const handlePriorityWordUpdated = useCallback((word: Word) => {
    updatePriorityWord(word);
    setCurrentView(AppView.PRIORITY_LIST);
  }, [updatePriorityWord]);

  const handleIdiomUpdated = useCallback((idiom: Idiom) => {
    updateIdiom(idiom);
    setCurrentView(AppView.IDIOM_LIST);
  }, [updateIdiom]);

  const handleBackToWordList = useCallback(() => {
    setCurrentView(AppView.WORD_LIST);
  }, []);
  
  const handleBackToConversationList = useCallback(() => {
    setCurrentView(AppView.CONVERSATION_LIST);
  }, []);

  const handleBackToPriorityList = useCallback(() => {
    setCurrentView(AppView.PRIORITY_LIST);
  }, []);

  const handleBackToIdiomList = useCallback(() => {
    setCurrentView(AppView.IDIOM_LIST);
  }, []);


  const handleDeleteWord = useCallback((wordId: number) => {
    if (window.confirm('이 단어를 정말로 삭제하시겠습니까? 학습 기록도 함께 사라집니다.')) {
        deleteUserWord(wordId);
    }
  }, [deleteUserWord]);
  
  const handleDeleteConversation = useCallback((conversationId: number) => {
    if (window.confirm('이 문장을 정말로 삭제하시겠습니까? 학습 기록도 함께 사라집니다.')) {
        deleteUserConversation(conversationId);
    }
  }, [deleteUserConversation]);

  const handleDeletePriorityWord = useCallback((wordId: number) => {
    if (window.confirm('이 단어를 정말로 삭제하시겠습니까? 학습 기록도 함께 사라집니다.')) {
        deletePriorityWord(wordId);
    }
  }, [deletePriorityWord]);

  const handleDeleteIdiom = useCallback((idiomId: number) => {
    if (window.confirm('이 숙어를 정말로 삭제하시겠습니까? 학습 기록도 함께 사라집니다.')) {
        deleteIdiom(idiomId);
    }
  }, [deleteIdiom]);

  const handleBackupData = useCallback(() => {
    try {
      const backupData: {
        words?: Word[];
        progress?: Record<number, WordProgress>;
        stats?: UserStats;
        characters?: HanjaCharacter[];
        characterProgress?: Record<number, HanjaCharacterProgress>;
        conversations?: Conversation[];
        conversationProgress?: Record<number, ConversationProgress>;
        priorityWords?: Word[];
        priorityProgress?: Record<number, WordProgress>;
        idioms?: Idiom[];
        idiomProgress?: Record<number, IdiomProgress>;
      } = {};

      const words = localStorage.getItem('danzzak-words');
      if(words) backupData.words = JSON.parse(words);
      
      const progress = localStorage.getItem('danzzak-progress');
      if(progress) backupData.progress = JSON.parse(progress);

      const stats = localStorage.getItem('danzzak-stats');
      if(stats) backupData.stats = JSON.parse(stats);

      const characters = localStorage.getItem('danzzak-characters');
      if(characters) backupData.characters = JSON.parse(characters);

      const characterProgress = localStorage.getItem('danzzak-character-progress');
      if(characterProgress) backupData.characterProgress = JSON.parse(characterProgress);

      const conversations = localStorage.getItem('danzzak-conversations');
      if(conversations) backupData.conversations = JSON.parse(conversations);

      const conversationProgress = localStorage.getItem('danzzak-conversation-progress');
      if(conversationProgress) backupData.conversationProgress = JSON.parse(conversationProgress);
      
      const priorityWords = localStorage.getItem('danzzak-priority-words');
      if(priorityWords) backupData.priorityWords = JSON.parse(priorityWords);

      const priorityProgress = localStorage.getItem('danzzak-priority-progress');
      if(priorityProgress) backupData.priorityProgress = JSON.parse(priorityProgress);

      const idioms = localStorage.getItem('danzzak-idioms');
      if(idioms) backupData.idioms = JSON.parse(idioms);

      const idiomProgress = localStorage.getItem('danzzak-idiom-progress');
      if(idiomProgress) backupData.idiomProgress = JSON.parse(idiomProgress);


      if (Object.keys(backupData).length === 0) {
        alert('백업할 데이터가 없습니다.');
        return;
      }

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

          let dataRestored = false;
          if (restoredData.words) { localStorage.setItem('danzzak-words', JSON.stringify(restoredData.words)); dataRestored = true; }
          if (restoredData.progress) { localStorage.setItem('danzzak-progress', JSON.stringify(restoredData.progress)); dataRestored = true; }
          if (restoredData.stats) { localStorage.setItem('danzzak-stats', JSON.stringify(restoredData.stats)); dataRestored = true; }
          if (restoredData.characters) { localStorage.setItem('danzzak-characters', JSON.stringify(restoredData.characters)); dataRestored = true; }
          if (restoredData.characterProgress) { localStorage.setItem('danzzak-character-progress', JSON.stringify(restoredData.characterProgress)); dataRestored = true; }
          if (restoredData.conversations) { localStorage.setItem('danzzak-conversations', JSON.stringify(restoredData.conversations)); dataRestored = true; }
          if (restoredData.conversationProgress) { localStorage.setItem('danzzak-conversation-progress', JSON.stringify(restoredData.conversationProgress)); dataRestored = true; }
          if (restoredData.priorityWords) { localStorage.setItem('danzzak-priority-words', JSON.stringify(restoredData.priorityWords)); dataRestored = true; }
          if (restoredData.priorityProgress) { localStorage.setItem('danzzak-priority-progress', JSON.stringify(restoredData.priorityProgress)); dataRestored = true; }
          if (restoredData.idioms) { localStorage.setItem('danzzak-idioms', JSON.stringify(restoredData.idioms)); dataRestored = true; }
          if (restoredData.idiomProgress) { localStorage.setItem('danzzak-idiom-progress', JSON.stringify(restoredData.idiomProgress)); dataRestored = true; }
            
          if (dataRestored) {
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
  
  const gamePriorityWordsForUser = useMemo(() => {
    return [...learnedPriorityWords].sort(() => 0.5 - Math.random()).slice(0, 10);
  }, [learnedPriorityWords]);

  const gameConversationsForUser = useMemo(() => {
    return [...learnedConversations].sort(() => 0.5 - Math.random()).slice(0, 10);
  }, [learnedConversations]);

  const gameIdiomsForUser = useMemo(() => {
    // Using 'Word' type structure for compatibility with QuizGame
    return [...learnedIdioms].map(i => ({
        id: i.id,
        word: i.expression,
        meaning: i.meaning
    })).sort(() => 0.5 - Math.random()).slice(0, 10);
  }, [learnedIdioms]);

  const quizHanjaCharacters = useMemo(() => {
    return [...learnedCharacters].sort(() => 0.5 - Math.random()).slice(0, 10);
  }, [learnedCharacters]);

  const quizHanjaGroups = useMemo(() => {
    return [...learnedGroups].sort(() => 0.5 - Math.random()).slice(0, 10);
  }, [learnedGroups]);


  const renderHeader = (stats: UserStats) => (
    <header className="bg-slate-800/80 backdrop-blur-sm shadow-md sticky top-0 z-10 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 whitespace-nowrap">
          <SparklesIcon className="w-8 h-8 text-blue-500" />
          <h1 className="text-xl md:text-2xl font-extrabold text-white">단짝-단어 암기 친구</h1>
        </div>
        <div className="flex items-center gap-2">
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
      case AppView.USER_WORD_FLASHCARDS:
        return <FlashcardView words={wordsForUserLesson} updateWordProgress={updateWordProgress} onComplete={handleSessionComplete} onBack={handleBack} sessionTitle="플래시 카드 학습" />;
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
          onFlashcard={handleStartSingleWordFlashcard}
        />;
      case AppView.EDIT_WORD:
        return wordToEdit ? <EditWordView 
          wordToEdit={wordToEdit}
          onUpdateWord={handleWordUpdated}
          onBack={handleBackToWordList}
        /> : null;
      case AppView.CHEONJAMUN_FLASHCARDS:
        return <CheonjamunFlashcardView
          characters={charactersForLesson}
          characterProgress={characterProgress}
          updateCharacterProgress={updateCharacterProgress}
          onComplete={handleSessionComplete}
          onBack={handleBack}
          sessionTitle="천자문 학습"
        />;
      case AppView.CHEONJAMUN_LIST:
        return <CheonjamunListView 
          allCharacters={allCharacters}
          progress={characterProgress}
          onBack={handleBack}
          onFlashcard={handleStartSingleHanjaGroupFlashcard}
        />;
      case AppView.HANJA_QUIZ:
        return <HanjaQuizView 
          characters={quizHanjaCharacters}
          updateCharacterProgress={updateCharacterProgress}
          onComplete={handleSessionComplete} 
          onBack={handleBack} 
        />;
      case AppView.FOUR_CHAR_QUIZ:
        return <FourCharQuizView 
          groups={quizHanjaGroups} 
          allGroups={learnedGroups}
          onComplete={handleSessionComplete} 
          onBack={handleBack} 
        />;
      case AppView.REVIEW_SINGLE_WORD_FLASHCARD:
        return <FlashcardView
            words={singleWordForFlashcard}
            updateWordProgress={updateWordProgress}
            onComplete={handleReviewSessionComplete}
            onBack={() => setCurrentView(AppView.WORD_LIST)}
            sessionTitle="단어 복습"
        />;
      case AppView.REVIEW_SINGLE_HANJA_GROUP_FLASHCARD:
        return <CheonjamunFlashcardView
            characters={singleHanjaGroupForFlashcard}
            characterProgress={characterProgress}
            updateCharacterProgress={updateCharacterProgress}
            onComplete={handleReviewHanjaSessionComplete}
            onBack={() => setCurrentView(AppView.CHEONJAMUN_LIST)}
            sessionTitle="한자 그룹 복습"
            isReview={true}
        />;
       case AppView.ADD_CONVERSATION:
        return <AddConversationView onAddConversation={handleConversationAdded} onBack={handleBack} />;
      case AppView.CONVERSATION_FLASHCARDS:
        return <ConversationFlashcardView conversations={conversationsForLesson} updateConversationProgress={updateConversationProgress} onComplete={handleSessionComplete} onBack={handleBack} sessionTitle="플래시 카드 학습" />;
      case AppView.CONVERSATION_QUIZ:
        return <ConversationQuizGame conversations={gameConversationsForUser} allConversations={learnedConversations} onComplete={handleSessionComplete} onBack={handleBack} />;
      case AppView.CONVERSATION_LIST:
        return <ConversationListView 
          conversations={allConversations} 
          progress={conversationProgress} 
          onBack={handleBack}
          onEdit={handleNavigateToEditConversation}
          onDelete={handleDeleteConversation}
          onFlashcard={handleStartSingleConversationFlashcard}
        />;
      case AppView.EDIT_CONVERSATION:
        return conversationToEdit ? <EditConversationView 
          conversationToEdit={conversationToEdit}
          onUpdateConversation={handleConversationUpdated}
          onBack={handleBackToConversationList}
        /> : null;
      case AppView.REVIEW_SINGLE_CONVERSATION_FLASHCARD:
        return <ConversationFlashcardView
            conversations={singleConversationForFlashcard}
            updateConversationProgress={updateConversationProgress}
            onComplete={handleReviewConversationSessionComplete}
            onBack={() => setCurrentView(AppView.CONVERSATION_LIST)}
            sessionTitle="문장 복습"
        />;
      case AppView.ADD_PRIORITY_WORD:
        return <AddWordView onAddWord={handlePriorityWordAdded} onBack={handleBack} />;
      case AppView.PRIORITY_FLASHCARDS:
        return <FlashcardView words={priorityWordsForLesson} updateWordProgress={updatePriorityWordProgress} onComplete={handleSessionComplete} onBack={handleBack} sessionTitle="플래시 카드 학습" />;
      case AppView.PRIORITY_QUIZ:
        return <QuizGame words={gamePriorityWordsForUser} onComplete={handleSessionComplete} onBack={handleBack} />;
      case AppView.PRIORITY_SPELLING_BEE:
        return <SpellingBeeGame words={gamePriorityWordsForUser} onComplete={handleSessionComplete} onBack={handleBack} />;
      case AppView.PRIORITY_LIST:
        return <WordListView 
          words={allPriorityWords} 
          progress={priorityWordProgress} 
          onBack={handleBack}
          onEdit={handleNavigateToEditPriority}
          onDelete={handleDeletePriorityWord}
          onFlashcard={handleStartSinglePriorityFlashcard}
        />;
      case AppView.EDIT_PRIORITY_WORD:
        return priorityWordToEdit ? <EditWordView 
          wordToEdit={priorityWordToEdit}
          onUpdateWord={handlePriorityWordUpdated}
          onBack={handleBackToPriorityList}
        /> : null;
      case AppView.REVIEW_SINGLE_PRIORITY_WORD_FLASHCARD:
        return <FlashcardView
            words={singlePriorityWordForFlashcard}
            updateWordProgress={updatePriorityWordProgress}
            onComplete={handleReviewPrioritySessionComplete}
            onBack={() => setCurrentView(AppView.PRIORITY_LIST)}
            sessionTitle="단어 복습"
        />;
      case AppView.ADD_IDIOM:
        // Reusing AddConversationView since Idioms share similar structure (Expression/Meaning)
        return <AddConversationView onAddConversation={(val) => handleIdiomAdded(val)} onBack={handleBack} />;
      case AppView.IDIOM_FLASHCARDS:
        // Reusing ConversationFlashcardView as Idioms structure matches (expression/meaning)
        // Casting type as Conversation[] since structure is compatible for display
        return <ConversationFlashcardView conversations={idiomsForLesson as unknown as Conversation[]} updateConversationProgress={updateIdiomProgress} onComplete={handleSessionComplete} onBack={handleBack} sessionTitle="플래시 카드 학습" />;
      case AppView.IDIOM_QUIZ:
        // Reusing QuizGame since we mapped idioms to Word structure
        return <QuizGame words={gameIdiomsForUser} onComplete={handleSessionComplete} onBack={handleBack} />;
      case AppView.IDIOM_LIST:
        // Reusing ConversationListView as Idioms share similar structure
        return <ConversationListView 
          conversations={allIdioms as unknown as Conversation[]} 
          progress={idiomProgress as unknown as Record<number, ConversationProgress>} 
          onBack={handleBack}
          onEdit={handleNavigateToEditIdiom}
          onDelete={handleDeleteIdiom}
          onFlashcard={handleStartSingleIdiomFlashcard}
        />;
      case AppView.EDIT_IDIOM:
        return idiomToEdit ? <EditConversationView 
          conversationToEdit={idiomToEdit as unknown as Conversation}
          onUpdateConversation={(conv) => handleIdiomUpdated(conv as unknown as Idiom)}
          onBack={handleBackToIdiomList}
        /> : null;
      case AppView.REVIEW_SINGLE_IDIOM_FLASHCARD:
        return <ConversationFlashcardView
            conversations={singleIdiomForFlashcard as unknown as Conversation[]}
            updateConversationProgress={updateIdiomProgress}
            onComplete={handleReviewIdiomSessionComplete}
            onBack={() => setCurrentView(AppView.IDIOM_LIST)}
            sessionTitle="숙어 복습"
        />;
      case AppView.DASHBOARD:
      default:
        return <Dashboard 
          stats={userStats} 
          onNavigate={handleNavigate} 
          userWordCount={wordsForUserLesson.length}
          userAddedWordsCount={userAddedWords.length}
          onSetDailyGoal={setDailyGoal}
          onSetWeeklyGoal={setWeeklyGoal}
          allWordsCount={allWords.length}
          cheonjamunLearnCount={unlearnedCharactersCount}
          allCharactersCount={allCharacters.length}
          activeMode={activeMode}
          englishStats={learningStats.englishStats}
          hanjaStats={learningStats.hanjaStats}
          hanjaLearnedCount={learnedCharacters.length}
          conversationStats={learningStats.conversationStats}
          userConversationCount={conversationsForLesson.length}
          userAddedConversationsCount={userAddedConversations.length}
          allConversationsCount={allConversations.length}
          learnedConversationsCount={learnedConversations.length}
          priorityStats={learningStats.priorityStats}
          priorityWordsForLessonCount={priorityWordsForLesson.length}
          allPriorityWordsCount={allPriorityWords.length}
          learnedPriorityWordsCount={learnedPriorityWords.length}
          idiomStats={learningStats.idiomStats}
          idiomsForLessonCount={idiomsForLesson.length}
          allIdiomsCount={allIdioms.length}
          learnedIdiomsCount={learnedIdioms.length}
        />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200">
      {renderHeader(userStats)}
      <main className="max-w-7xl mx-auto p-4 md:p-6">
        <TopNav activeMode={activeMode} onModeChange={handleModeChange} />
        {renderContent()}
      </main>
      <footer className="text-center p-4 text-xs text-slate-500">
      </footer>
    </div>
  );
};

export default App;
