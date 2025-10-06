import React, { useState, useEffect, useCallback } from 'react';
import { HanjaCharacter } from '../types';
import { ChevronLeftIcon } from './icons/Icons';

interface HanjaQuizViewProps {
  characters: HanjaCharacter[];
  updateCharacterProgress: (characterId: number, isCorrect: boolean) => void;
  onComplete: (xp: number, coins: number) => void;
  onBack: () => void;
}

const XP_PER_CORRECT = 15;
const COINS_PER_CORRECT = 3;
const OPTIONS_COUNT = 4;

const HanjaQuizView: React.FC<HanjaQuizViewProps> = ({ characters, updateCharacterProgress, onComplete, onBack }) => {
  const [quizChars] = useState(characters);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [options, setOptions] = useState<HanjaCharacter[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState({ xp: 0, coins: 0 });

  const currentHanja = quizChars[currentIndex];

  const generateOptions = useCallback(() => {
    if (!currentHanja || quizChars.length < OPTIONS_COUNT) return;

    const otherChars = quizChars.filter(c => c.id !== currentHanja.id);
    const shuffled = otherChars.sort(() => 0.5 - Math.random());
    const randomOptions = shuffled.slice(0, OPTIONS_COUNT - 1);
    const allOptions = [...randomOptions, currentHanja].sort(() => 0.5 - Math.random());
    setOptions(allOptions);
  }, [currentHanja, quizChars]);

  useEffect(() => {
    generateOptions();
  }, [currentIndex, generateOptions]);

  const handleOptionClick = (optionChar: HanjaCharacter) => {
    if (selectedOption !== null) return;

    setSelectedOption(optionChar.id);
    const correct = optionChar.id === currentHanja.id;
    setIsCorrect(correct);
    updateCharacterProgress(currentHanja.id, correct);

    if (correct) {
      setScore(prev => ({
        xp: prev.xp + XP_PER_CORRECT,
        coins: prev.coins + COINS_PER_CORRECT,
      }));
    }

    setTimeout(() => {
      if (currentIndex < quizChars.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setSelectedOption(null);
        setIsCorrect(null);
      } else {
        onComplete(score.xp + (correct ? XP_PER_CORRECT : 0), score.coins + (correct ? COINS_PER_CORRECT : 0));
      }
    }, 1500);
  };

  if (quizChars.length < OPTIONS_COUNT) {
    return (
      <div className="text-center p-8 bg-slate-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">한자 수 부족</h2>
        <p className="text-slate-300">퀴즈를 풀려면 최소 {OPTIONS_COUNT}개의 한자를 학습해야 해요.</p>
        <button 
          onClick={() => onComplete(0, 0)}
          className="mt-6 bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors">
          대시보드로 돌아가기
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
       <div className="w-full max-w-2xl mb-6">
            <button onClick={onBack} className="inline-flex items-center gap-2 px-6 py-3 text-xl font-bold text-white bg-slate-500 rounded-xl shadow-md hover:bg-slate-600 transition-all transform hover:scale-105">
                <ChevronLeftIcon className="w-6 h-6" />
                대시보드로
            </button>
        </div>
      <div className="w-full bg-slate-700 rounded-full h-2.5 mb-4">
          <div className="bg-indigo-500 h-2.5 rounded-full transition-all duration-300" style={{ width: `${((currentIndex) / quizChars.length) * 100}%` }}></div>
      </div>

      <div className="bg-slate-800 p-8 rounded-2xl shadow-2xl text-center">
        <p className="text-slate-400 font-semibold mb-2">다음 한자의 뜻과 음은 무엇일까요?</p>
        <h2 className="text-8xl font-extrabold mb-8 text-white">{currentHanja?.character}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {options.map(option => {
            const isSelected = selectedOption === option.id;
            let buttonClass = 'bg-slate-700 hover:bg-slate-600 text-slate-200';
            if (isSelected) {
              buttonClass = isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white';
            } else if (selectedOption !== null && option.id === currentHanja.id) {
              buttonClass = 'bg-green-500 text-white';
            }

            return (
              <button
                key={option.id}
                onClick={() => handleOptionClick(option)}
                disabled={selectedOption !== null}
                className={`p-4 rounded-lg font-semibold text-left text-xl transition-all duration-300 transform ${selectedOption === null ? 'hover:scale-105' : ''} ${buttonClass}`}
              >
                {option.meaning} {option.sound}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HanjaQuizView;