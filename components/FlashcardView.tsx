import React, { useState, useMemo } from 'react';
import { Word } from '../types';
import { ChevronLeftIcon } from './icons/Icons';

interface FlashcardViewProps {
  words: Word[];
  updateWordProgress: (wordId: number, isCorrect: boolean) => void;
  onComplete: (xp: number, coins: number) => void;
  onBack: () => void;
  isReview?: boolean;
}

const XP_PER_WORD = 10;
const COINS_PER_WORD = 2;

const FlashcardView: React.FC<FlashcardViewProps> = ({ words, updateWordProgress, onComplete, onBack, isReview = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [sessionProgress, setSessionProgress] = useState({ correct: 0, incorrect: 0 });

  const currentWord = useMemo(() => words[currentIndex], [words, currentIndex]);

  const handleNext = (isCorrect: boolean) => {
    updateWordProgress(currentWord.id, isCorrect);
    setSessionProgress(prev => ({
      ...prev,
      correct: prev.correct + (isCorrect ? 1 : 0),
      incorrect: prev.incorrect + (isCorrect ? 0 : 1),
    }));

    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    } else {
      const xpGained = sessionProgress.correct * XP_PER_WORD;
      const coinsGained = sessionProgress.correct * COINS_PER_WORD;
      onComplete(xpGained, coinsGained);
    }
  };

  if (words.length === 0 || !currentWord) {
    return (
      <div className="text-center p-8 bg-slate-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">모두 완료!</h2>
        <p className="text-slate-300">지금은 학습하거나 복습할 단어가 없어요.</p>
        <button 
          onClick={() => onComplete(0, 0)}
          className="mt-6 bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors">
          대시보드로 돌아가기
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
        <div className="w-full max-w-2xl mb-6">
            <button onClick={onBack} className="inline-flex items-center gap-2 px-6 py-3 text-xl font-bold text-white bg-slate-500 rounded-xl shadow-md hover:bg-slate-600 transition-all transform hover:scale-105">
                <ChevronLeftIcon className="w-6 h-6" />
                대시보드로
            </button>
        </div>
      <div className="w-full max-w-2xl">
        <p className="text-center text-slate-400 font-semibold">{isReview ? '복습 중' : '학습 중'}: {currentIndex + 1} / {words.length}</p>
        <div className="w-full bg-slate-700 rounded-full h-2.5 mt-2 mb-8">
            <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${((currentIndex + 1) / words.length) * 100}%` }}></div>
        </div>
      </div>
      
      <div 
        className="w-full max-w-2xl h-80 perspective-1000"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-500 ${isFlipped ? 'rotate-y-180' : ''}`}>
          {/* Front of card */}
          <div className="absolute w-full h-full backface-hidden bg-slate-800 rounded-2xl shadow-xl flex flex-col justify-center items-center p-6 border-4 border-blue-400">
            <h2 className="text-6xl font-extrabold text-white break-all text-center">{currentWord.word}</h2>
            <p className="mt-2 text-slate-400">{currentWord.pronunciation}</p>
            <p className="absolute bottom-4 text-xs text-slate-400">클릭해서 뒤집기</p>
          </div>

          {/* Back of card */}
          <div className="absolute w-full h-full backface-hidden bg-slate-800 rounded-2xl shadow-xl flex flex-col justify-center items-center p-6 rotate-y-180 border-4 border-green-400">
            <p className="text-6xl font-bold text-slate-200 text-center break-all">{currentWord.meaning}</p>
            <p className="mt-4 text-lg text-slate-400 text-center italic">"{currentWord.example}"</p>
          </div>
        </div>
      </div>

      {isFlipped && (
        <div className="mt-8 w-full max-w-2xl flex justify-around animate-fade-in">
          <button 
            onClick={() => handleNext(false)}
            className="w-40 bg-red-500 text-white font-bold py-4 px-6 rounded-lg text-lg transform hover:scale-105 transition-transform shadow-lg">
            암기중
          </button>
          <button 
            onClick={() => handleNext(true)}
            className="w-40 bg-green-500 text-white font-bold py-4 px-6 rounded-lg text-lg transform hover:scale-105 transition-transform shadow-lg">
            암기완료
          </button>
        </div>
      )}

      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-preserve-3d { transform-style: preserve-3d; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .backface-hidden { backface-visibility: hidden; }
        .animate-fade-in { animation: fadeIn 0.5s; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default FlashcardView;