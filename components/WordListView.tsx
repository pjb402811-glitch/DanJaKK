import React from 'react';
import { Word, WordProgress } from '../types';
import { ChevronLeftIcon, BookOpenIcon, PencilIcon, TrashIcon } from './icons/Icons';

interface WordListViewProps {
  words: Word[];
  progress: Record<number, WordProgress>;
  onBack: () => void;
  onEdit: (wordId: number) => void;
  onDelete: (wordId: number) => void;
  onFlashcard: (wordId: number) => void;
}

const WordListView: React.FC<WordListViewProps> = ({ words, progress, onBack, onEdit, onDelete, onFlashcard }) => {

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
            <div className="p-4 bg-sky-500 rounded-full mb-4">
                <BookOpenIcon className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-extrabold text-white">학습 단어 목록</h2>
            <p className="text-slate-400 mt-1">지금까지 학습한 모든 단어입니다.</p>
        </div>

        {words.length > 0 ? (
          <div className="space-y-3">
            {words.map(word => {
              const wordProgress = progress[word.id];
              if (!wordProgress) return null;

              return (
                <div key={word.id} className="bg-slate-700/50 p-4 rounded-lg flex items-center gap-4 justify-between">
                  <div className="flex-1 flex flex-col md:flex-row md:items-baseline md:gap-4">
                    <p className="font-bold text-2xl text-white md:basis-2/5 truncate">{word.word}</p>
                    <p className="text-xl text-slate-300 md:basis-3/5">{word.meaning}</p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button 
                        onClick={() => onFlashcard(word.id)} 
                        className="p-2 rounded-full hover:bg-slate-600 transition-colors" 
                        title="플래시 카드 학습"
                    >
                        <BookOpenIcon className="w-5 h-5 text-sky-400" />
                    </button>
                    {word.isUserAdded && (
                      <>
                        <button onClick={() => onEdit(word.id)} className="p-2 rounded-full hover:bg-slate-600 transition-colors" aria-label="단어 수정">
                          <PencilIcon className="w-5 h-5 text-yellow-500" />
                        </button>
                        <button onClick={() => onDelete(word.id)} className="p-2 rounded-full hover:bg-slate-600 transition-colors" aria-label="단어 삭제">
                          <TrashIcon className="w-5 h-5 text-red-500" />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-slate-400">아직 학습한 단어가 없습니다.</p>
            <p className="text-slate-400 mt-2">학습을 시작하여 단어장을 채워보세요!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WordListView;