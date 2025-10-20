import React from 'react';
import { Conversation, ConversationProgress } from '../types';
import { ChevronLeftIcon, BookOpenIcon, PencilIcon, TrashIcon } from './icons/Icons';

interface ConversationListViewProps {
  conversations: Conversation[];
  progress: Record<number, ConversationProgress>;
  onBack: () => void;
  onEdit: (conversationId: number) => void;
  onDelete: (conversationId: number) => void;
  onFlashcard: (conversationId: number) => void;
}

const ConversationListView: React.FC<ConversationListViewProps> = ({ conversations, progress, onBack, onEdit, onDelete, onFlashcard }) => {

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
            <h2 className="text-3xl font-extrabold text-white">학습 문장 목록</h2>
            <p className="text-slate-400 mt-1">지금까지 학습한 모든 문장입니다.</p>
        </div>

        {conversations.length > 0 ? (
          <div className="space-y-3">
            {conversations.map(convo => {
              const convoProgress = progress[convo.id];
              if (!convoProgress) return null;

              return (
                <div key={convo.id} className="bg-slate-700/50 p-4 rounded-lg flex items-center gap-4 justify-between">
                  <div className="flex-1 flex flex-col gap-2">
                    <p className="font-bold text-lg text-white">{convo.expression}</p>
                    <p className="text-md text-slate-300">{convo.meaning}</p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button 
                        onClick={() => onFlashcard(convo.id)} 
                        className="p-2 rounded-full hover:bg-slate-600 transition-colors" 
                        title="플래시 카드 학습"
                    >
                        <BookOpenIcon className="w-5 h-5 text-sky-400" />
                    </button>
                    {convo.isUserAdded && (
                      <>
                        <button onClick={() => onEdit(convo.id)} className="p-2 rounded-full hover:bg-slate-600 transition-colors" aria-label="문장 수정">
                          <PencilIcon className="w-5 h-5 text-yellow-500" />
                        </button>
                        <button onClick={() => onDelete(convo.id)} className="p-2 rounded-full hover:bg-slate-600 transition-colors" aria-label="문장 삭제">
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
            <p className="text-slate-400">아직 학습한 문장이 없습니다.</p>
            <p className="text-slate-400 mt-2">학습을 시작하여 문장장을 채워보세요!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConversationListView;