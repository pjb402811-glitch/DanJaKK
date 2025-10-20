import React, { useState } from 'react';
import { Conversation } from '../types';
import { ChevronLeftIcon, PlusCircleIcon } from './icons/Icons';

interface AddConversationViewProps {
  onAddConversation: (conversation: Omit<Conversation, 'id'>) => void;
  onBack: () => void;
}

const InputField: React.FC<{ label: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; placeholder: string; required?: boolean; }> = 
({ label, value, onChange, placeholder, required = false }) => (
    <div>
        <label className="block mb-2 text-sm font-bold text-slate-300">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className="w-full px-4 py-2 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-800 text-white font-bold placeholder-slate-400"
        />
    </div>
);

const AddConversationView: React.FC<AddConversationViewProps> = ({ onAddConversation, onBack }) => {
  const [expression, setExpression] = useState('');
  const [meaning, setMeaning] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!expression.trim() || !meaning.trim()) {
      setError('영어 문장과 한국어 뜻은 필수 항목입니다.');
      return;
    }
    setError('');
    onAddConversation({
      expression: expression.trim(),
      meaning: meaning.trim(),
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
        <div className="mb-6">
            <button onClick={onBack} className="inline-flex items-center gap-2 px-6 py-3 text-xl font-bold text-white bg-slate-500 rounded-xl shadow-md hover:bg-slate-600 transition-all transform hover:scale-105">
                <ChevronLeftIcon className="w-6 h-6" />
                대시보드로
            </button>
        </div>
        <div className="bg-slate-800 p-8 rounded-2xl shadow-2xl">
            <h2 className="text-3xl font-extrabold text-center mb-6 text-white">문장 추가하기</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <InputField label="영어 문장" value={expression} onChange={e => setExpression(e.target.value)} placeholder="예: How have you been?" required />
                <InputField label="한국어 뜻" value={meaning} onChange={e => setMeaning(e.target.value)} placeholder="예: 어떻게 지냈어?" required />
                
                {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
                    <PlusCircleIcon className="w-6 h-6" />
                    문장 추가
                </button>
            </form>
        </div>
    </div>
  );
};

export default AddConversationView;