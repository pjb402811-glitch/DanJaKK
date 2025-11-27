
import React, { useState, useMemo, useCallback } from 'react';
import { Word, WordProgress } from '../types';
import { ChevronLeftIcon, BookOpenIcon, PencilIcon, TrashIcon, MagnifyingGlassIcon, CheckCircleIcon } from './icons/Icons';

interface WordListViewProps {
  words: Word[];
  progress: Record<number, WordProgress>;
  onBack: () => void;
  onEdit: (wordId: number) => void;
  onDelete: (wordId: number) => void;
  onFlashcard: (wordId: number) => void;
  onStudySelected?: (selectedWords: Word[]) => void;
}

const WordListView: React.FC<WordListViewProps> = ({ words, progress, onBack, onEdit, onDelete, onFlashcard, onStudySelected }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());

  const filteredWords = useMemo(() => {
    if (!searchTerm.trim()) return words;
    const lowerTerm = searchTerm.toLowerCase();
    return words.filter(word => 
      word.word.toLowerCase().includes(lowerTerm) || 
      word.meaning.toLowerCase().includes(lowerTerm)
    );
  }, [words, searchTerm]);

  const handleToggleSelect = (id: number) => {
    setSelectedIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleSelectAll = () => {
    if (selectedIds.size === filteredWords.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(filteredWords.map(w => w.id)));
    }
  };

  const handleStudySelectedAction = () => {
    if (onStudySelected) {
      const selectedWords = words.filter(w => selectedIds.has(w.id));
      onStudySelected(selectedWords);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto pb-24 relative">
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
            <h2 className="text-3xl font-extrabold text-white">단어 목록</h2>
            <p className="text-slate-400 mt-1">목록에서 원하는 단어를 선택해 집중 학습하세요.</p>
        </div>

        <div className="mb-6 flex gap-4">
            <div className="relative flex-1">
                <input 
                    type="text" 
                    placeholder="단어 또는 뜻으로 검색..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 pl-12 rounded-lg bg-slate-700 text-white border border-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                />
                <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-slate-400" />
            </div>
        </div>
        
        {filteredWords.length > 0 && (
            <div className="mb-4 bg-slate-700/30 p-4 rounded-lg flex flex-col sm:flex-row justify-between items-center gap-3 border border-slate-600/50">
                <div className="flex items-center gap-2 self-start sm:self-auto">
                    <span className="font-bold text-lg text-white">학습할 단어 선택</span>
                    <span className="text-sm text-slate-400">({selectedIds.size}개 선택됨)</span>
                </div>

                <label className="flex items-center gap-2 cursor-pointer text-slate-300 hover:text-white transition-colors select-none self-end sm:self-auto bg-slate-800/50 px-3 py-1.5 rounded-md border border-slate-600 hover:border-slate-500">
                    <div className={`w-5 h-5 rounded border-2 flex-shrink-0 flex items-center justify-center transition-colors ${selectedIds.size === filteredWords.length && filteredWords.length > 0 ? 'bg-blue-500 border-blue-500' : 'border-slate-500'}`}>
                        {selectedIds.size === filteredWords.length && filteredWords.length > 0 && <CheckCircleIcon className="w-3.5 h-3.5 text-white" />}
                    </div>
                    <input 
                        type="checkbox" 
                        className="hidden"
                        checked={selectedIds.size === filteredWords.length && filteredWords.length > 0}
                        onChange={handleSelectAll}
                    />
                    <span className="text-sm font-medium">전체 선택 ({filteredWords.length}개)</span>
                </label>
            </div>
        )}

        {filteredWords.length > 0 ? (
          <div className="space-y-3">
            {filteredWords.map(word => {
              const wordProgress = progress[word.id];
              const isSelected = selectedIds.has(word.id);
              // if (!wordProgress) return null; // Optional: Skip if no progress record exists (though unlikely for correct data)

              return (
                <div 
                    key={word.id} 
                    className={`p-4 rounded-lg flex items-center gap-4 justify-between transition-all border-2 cursor-pointer ${isSelected ? 'bg-blue-900/30 border-blue-500 shadow-inner' : 'bg-slate-700/50 border-transparent hover:border-slate-600'}`}
                    onClick={() => handleToggleSelect(word.id)}
                >
                  <div className="flex items-center gap-4 flex-1">
                      <div className={`w-6 h-6 rounded border-2 flex-shrink-0 flex items-center justify-center transition-colors ${isSelected ? 'bg-blue-500 border-blue-500' : 'border-slate-500'}`}>
                          {isSelected && <CheckCircleIcon className="w-4 h-4 text-white" />}
                      </div>
                      <div className="flex-1 flex flex-col md:flex-row md:items-baseline md:gap-4">
                        <p className={`font-bold text-2xl md:basis-2/5 truncate ${isSelected ? 'text-blue-200' : 'text-white'}`}>{word.word}</p>
                        <p className={`text-xl md:basis-3/5 ${isSelected ? 'text-blue-100' : 'text-slate-300'}`}>{word.meaning}</p>
                      </div>
                  </div>
                  
                  <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                    <button 
                        onClick={() => onFlashcard(word.id)} 
                        className="p-2 rounded-full hover:bg-slate-600 transition-colors" 
                        title="이 단어만 바로 학습하기"
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
            <p className="text-slate-400">
                {searchTerm ? `'${searchTerm}'에 대한 검색 결과가 없습니다.` : "아직 단어가 없습니다."}
            </p>
            {!searchTerm && <p className="text-slate-400 mt-2">학습을 시작하여 단어장을 채워보세요!</p>}
          </div>
        )}
      </div>

      {/* Floating Action Button for Bulk Study */}
      {selectedIds.size > 0 && onStudySelected && (
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4 animate-bounce-in">
              <button 
                  onClick={handleStudySelectedAction}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-2xl shadow-xl flex items-center justify-center gap-3 transition-transform transform hover:scale-105 border-2 border-green-400/50"
              >
                  <BookOpenIcon className="w-6 h-6" />
                  <span className="text-lg">선택한 단어 학습하기 ({selectedIds.size}개)</span>
              </button>
          </div>
      )}
    </div>
  );
};

export default WordListView;
