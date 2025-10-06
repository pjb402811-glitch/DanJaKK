import React from 'react';
import { LearningMode } from '../types';

interface TopNavProps {
  activeMode: LearningMode;
  onModeChange: (mode: LearningMode) => void;
}

const TopNav: React.FC<TopNavProps> = ({ activeMode, onModeChange }) => {
  const getButtonClass = (mode: LearningMode) => {
    const baseClass = 'w-1/2 py-4 px-2 text-center text-lg font-bold transition-colors duration-300 focus:outline-none';
    if (activeMode === mode) {
      return `${baseClass} text-white bg-slate-700/80 border-b-4 border-blue-500`;
    }
    return `${baseClass} text-slate-400 hover:bg-slate-800/50`;
  };

  return (
    <nav className="flex w-full bg-slate-800 rounded-t-lg shadow-md mb-6">
      <button
        onClick={() => onModeChange('ENGLISH')}
        className={getButtonClass('ENGLISH')}
        aria-pressed={activeMode === 'ENGLISH'}
      >
        영어 단어 학습
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