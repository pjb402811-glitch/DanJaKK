import React, { useMemo } from 'react';
import { HanjaCharacter, HanjaCharacterProgress } from '../types';
import { ChevronLeftIcon, BookOpenIcon } from './icons/Icons';

interface CheonjamunListViewProps {
  allCharacters: HanjaCharacter[];
  progress: Record<number, HanjaCharacterProgress>;
  onBack: () => void;
  onFlashcard: (characters: HanjaCharacter[]) => void;
}

const CheonjamunListView: React.FC<CheonjamunListViewProps> = ({ allCharacters, progress, onBack, onFlashcard }) => {

  const learnedGroups = useMemo(() => {
    // FIX: Explicitly cast `Object.values(progress)` to `HanjaCharacterProgress[]` to ensure correct type inference.
    const learnedCharacterIds = new Set((Object.values(progress) as HanjaCharacterProgress[]).filter(p => p.lastReviewed).map(p => p.characterId));
    
    const groups: HanjaCharacter[][] = [];
    for (let i = 0; i < allCharacters.length; i += 4) {
      groups.push(allCharacters.slice(i, i + 4));
    }

    return groups.filter(group => group.some(char => learnedCharacterIds.has(char.id)));
  }, [allCharacters, progress]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-8">
        <button onClick={onBack} className="inline-flex items-center gap-2 px-6 py-3 text-xl font-bold text-white bg-slate-500 rounded-xl shadow-md hover:bg-slate-600 transition-all transform hover:scale-105">
          <ChevronLeftIcon className="w-6 h-6" />
          대시보드로
        </button>
      </div>

      <div className="bg-slate-800 p-8 rounded-2xl shadow-2xl">
        <div className="flex flex-col items-center text-center mb-8">
            <div className="p-4 bg-yellow-500 rounded-full mb-4">
                <BookOpenIcon className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-extrabold text-white">한자 목록</h2>
            <p className="text-slate-400 mt-1">학습한 모든 한자입니다.</p>
        </div>

        {learnedGroups.length > 0 ? (
          <div className="space-y-4">
            {learnedGroups.map((group, index) => (
                <div key={index} className="bg-slate-700/50 p-4 rounded-lg flex items-center justify-between">
                  <div className="flex-1">
                    <div className="grid grid-cols-4 gap-2 text-center">
                      {group.map(c => (
                        <p key={`${c.id}-char`} className="font-bold text-4xl text-white tracking-widest">{c.character}</p>
                      ))}
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-center mt-1 text-lg text-slate-300">
                      {group.map(c => (
                        <p key={`${c.id}-meaning`}>
                          {c.meaning}{' '}
                          <span className="text-3xl font-bold text-sky-400">{c.sound}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                   <div className="flex items-center gap-2">
                    <button 
                        onClick={() => onFlashcard(group)} 
                        className="p-2 rounded-full hover:bg-slate-600 transition-colors" 
                        title="플래시 카드 학습"
                    >
                        <BookOpenIcon className="w-5 h-5 text-sky-400" />
                    </button>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-slate-400">아직 학습한 한자가 없습니다.</p>
            <p className="text-slate-400 mt-2">천자문 학습을 시작하여 목록을 채워보세요!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheonjamunListView;