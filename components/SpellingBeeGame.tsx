import React, { useState, useEffect, useMemo } from 'react';
import { Word } from '../types';
import { ChevronLeftIcon } from './icons/Icons';

interface SpellingBeeGameProps {
  words: Word[];
  onComplete: (xp: number, coins: number) => void;
  onBack: () => void;
}

const XP_PER_CORRECT = 20;
const COINS_PER_CORRECT = 5;

// Fisher-Yates shuffle algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};


const SpellingBeeGame: React.FC<SpellingBeeGameProps> = ({ words, onComplete, onBack }) => {
  const [quizWords] = useState(() => words.filter(w => w.word.length > 0 && w.word.length <= 12));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState<string>('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [score, setScore] = useState({ xp: 0, coins: 0 });

  const currentWord = quizWords[currentIndex];

  const shuffledLetters = useMemo(() => {
    if (!currentWord) return [];
    return shuffleArray(currentWord.word.split(''));
  }, [currentWord]);

  const handleLetterClick = (letter: string, index: number) => {
    setCurrentAnswer(prev => prev + letter);
    // This is a simple implementation. For a more robust version, we'd need to handle duplicate letters better.
  };
  
  const handleBackspace = () => {
    setCurrentAnswer(prev => prev.slice(0, -1));
  };
  
  useEffect(() => {
    if (!currentWord || currentAnswer.length !== currentWord.word.length || feedback) {
      return;
    }

    const isCorrect = currentAnswer.toLowerCase() === currentWord.word.toLowerCase();

    if (isCorrect) {
      setFeedback('correct');
      setScore(prev => ({
        xp: prev.xp + XP_PER_CORRECT,
        coins: prev.coins + COINS_PER_CORRECT,
      }));

      setTimeout(() => {
        if (currentIndex < quizWords.length - 1) {
          setCurrentIndex(prev => prev + 1);
          setCurrentAnswer('');
          setFeedback(null);
        } else {
          // Add score for the final word before completing
          onComplete(score.xp + XP_PER_CORRECT, score.coins + COINS_PER_CORRECT);
        }
      }, 1200);
    } else {
      setFeedback('incorrect');
      setTimeout(() => {
        setCurrentAnswer('');
        setFeedback(null);
      }, 1200);
    }
  }, [currentAnswer, currentWord, currentIndex, quizWords, onComplete, score, feedback]);


  if (quizWords.length === 0) {
    return (
      <div className="text-center p-8 bg-slate-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">플레이할 단어 없음</h2>
        <p className="text-slate-300">철자 맞추기 게임을 하려면 학습된 단어가 필요해요.</p>
        <button 
          onClick={() => onComplete(0, 0)}
          className="mt-6 bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors">
          대시보드로 돌아가기
        </button>
      </div>
    );
  }

  const getAnswerBoxClass = () => {
    if (feedback === 'correct') return 'border-green-500 bg-green-900';
    if (feedback === 'incorrect') return 'border-red-500 bg-red-900 animate-shake';
    return 'border-slate-600';
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="w-full max-w-2xl mb-6">
            <button onClick={onBack} className="inline-flex items-center gap-2 px-6 py-3 text-xl font-bold text-white bg-slate-500 rounded-xl shadow-md hover:bg-slate-600 transition-all transform hover:scale-105">
                <ChevronLeftIcon className="w-6 h-6" />
                대시보드로
            </button>
      </div>
      <div className="w-full bg-slate-700 rounded-full h-2.5 mb-4">
          <div className="bg-red-500 h-2.5 rounded-full transition-all duration-300" style={{ width: `${((currentIndex) / quizWords.length) * 100}%` }}></div>
      </div>

      <div className="bg-slate-800 p-8 rounded-2xl shadow-2xl text-center">
        <p className="text-slate-400 font-semibold mb-2">다음 뜻을 가진 단어의 철자를 맞춰보세요...</p>
        <h2 className="text-3xl font-extrabold mb-6 text-white">{currentWord?.meaning}</h2>
        
        <div className={`w-full h-20 mb-6 flex items-center justify-center text-3xl font-bold tracking-widest border-2 rounded-lg transition-colors ${getAnswerBoxClass()}`}>
          {currentAnswer}
          <span className="animate-pulse">|</span>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {shuffledLetters.map((letter, index) => (
             <button 
                key={index} 
                onClick={() => handleLetterClick(letter, index)}
                // This is a simple implementation. A better one would disable used letters.
                className="w-12 h-12 bg-slate-700 rounded-md text-2xl font-bold hover:bg-blue-600 transition-transform transform hover:scale-110"
                >
                {letter}
            </button>
          ))}
        </div>
        
        <button onClick={handleBackspace} className="w-full bg-slate-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-slate-500">
          지우기
        </button>
      </div>
      <style>{`
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        .animate-shake {
            animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default SpellingBeeGame;