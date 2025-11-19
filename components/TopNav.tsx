
import React from 'react';
import { LearningMode } from '../types';

interface TopNavProps {
  activeMode: LearningMode;
  onModeChange: (mode: LearningMode) => void;
}

const TopNav: React.FC<TopNavProps> = ({ activeMode, onModeChange }) => {
  const getButtonClass = (mode: LearningMode) => {
    const baseClass = 'flex-1 py-4 px-1 text-center text-[10px] md:text-sm lg:text-base font-bold transition-colors duration-300 focus:outline-none whitespace-nowrap';
    if (activeMode === mode) {
      return `${baseClass} text-white bg-slate-700/80 border-b-4 border-blue-500`;
    }
    return `${baseClass} text-slate-400 hover:bg-slate-800/50`;
  };

  return (
    <nav className="flex w-full bg-slate-800 rounded-t-lg shadow-md mb-6 overflow-x-auto">
      <button
        onClick={() => onModeChange('ENGLISH')}
        className={getButtonClass('ENGLISH')}
        aria-pressed={activeMode === 'ENGLISH'}
      >
        영어단어 학습
      </button>
      <button
        onClick={() => onModeChange('CONVERSATION')}
        className={getButtonClass('CONVERSATION')}
        aria-pressed={activeMode === 'CONVERSATION'}
      >
        영어회화학습
      </button>
      <button
        onClick={() => onModeChange('PRIORITY')}
        className={getButtonClass('PRIORITY')}
        aria-pressed={activeMode === 'PRIORITY'}
      >
        우선순위영단어
      </button>
      <button
        onClick={() => onModeChange('IDIOM')}
        className={getButtonClass('IDIOM')}
        aria-pressed={activeMode === 'IDIOM'}
      >
        우선순위영숙어
      </button>
      <button
        onClick={() => onModeChange('HANJA')}
        className={getButtonClass('HANJA')}
        aria-pressed={activeMode === 'HANJA'}
      >
        천자문 학습
      </button>
    </nav>
  );
};

export default TopNav;
