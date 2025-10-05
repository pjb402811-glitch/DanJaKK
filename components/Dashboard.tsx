import React, { useState } from 'react';
import { AppView, UserStats } from '../types';
import { BookOpenIcon, SparklesIcon, TargetIcon, ChartBarIcon, PlusCircleIcon, PencilIcon, CalendarIcon, ArrowDownTrayIcon, ArrowUpTrayIcon } from './icons/Icons';

interface DashboardProps {
  stats: UserStats;
  onNavigate: (view: AppView) => void;
  reviewCount: number;
  userWordCount: number;
  userAddedWordsCount: number;
  onSetDailyGoal: (goal: number) => void;
  onSetWeeklyGoal: (goal: number) => void;
  totalWordsLearned: number;
  wordsLearnedToday: number;
  wordsLearnedThisWeek: number;
  allWordsCount: number;
}

const StatCard: React.FC<{ icon: React.ReactNode; label: string; value: string | number; color: string; children?: React.ReactNode; }> = ({ icon, label, value, color, children }) => (
  <div className="bg-slate-800 p-4 rounded-xl shadow-md flex items-center gap-4">
    <div className={`p-3 rounded-full ${color}`}>
      {icon}
    </div>
    <div className="flex-1">
      <p className="text-slate-400 text-sm font-semibold">{label}</p>
      <p className="text-xl font-bold text-white">{value}</p>
    </div>
    {children}
  </div>
);

const ActionButton: React.FC<{ icon: React.ReactNode; title: string; subtitle: string; onClick: () => void; color: string; count?: number; disabled?: boolean }> = ({ icon, title, subtitle, onClick, color, count, disabled=false }) => (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={`relative w-full h-40 text-center p-4 rounded-2xl shadow-lg flex flex-col items-center justify-center gap-2 transition-transform transform hover:scale-105 ${color} ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-xl'}`}
    >
      {icon}
      <div>
        <h3 className="text-lg font-extrabold text-white">{title}</h3>
        <p className="text-white/80 text-xs mt-1">{subtitle}</p>
      </div>
      {typeof count !== 'undefined' && (
         <div className="absolute top-3 right-3 bg-white/30 text-white font-bold rounded-full h-8 w-8 flex items-center justify-center text-base">
          {count}
         </div>
      )}
    </button>
  );


const Dashboard: React.FC<DashboardProps> = ({ stats, onNavigate, reviewCount, userWordCount, userAddedWordsCount, onSetDailyGoal, onSetWeeklyGoal, totalWordsLearned, wordsLearnedToday, wordsLearnedThisWeek, allWordsCount }) => {
  const [isEditingDailyGoal, setIsEditingDailyGoal] = useState(false);
  const [dailyGoal, setDailyGoal] = useState(stats.dailyGoal);
  
  const [isEditingWeeklyGoal, setIsEditingWeeklyGoal] = useState(false);
  const [weeklyGoal, setWeeklyGoal] = useState(stats.weeklyGoal);

  const handleDailyGoalSave = () => {
      onSetDailyGoal(dailyGoal);
      setIsEditingDailyGoal(false);
  }
  
  const handleWeeklyGoalSave = () => {
    onSetWeeklyGoal(weeklyGoal);
    setIsEditingWeeklyGoal(false);
}

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard icon={<TargetIcon className="w-6 h-6 text-white"/>} label="오늘의 목표" value={`${wordsLearnedToday} / ${stats.dailyGoal} 단어`} color="bg-blue-500">
            {isEditingDailyGoal ? (
                <div className="flex items-center gap-2">
                    <input 
                        type="number" 
                        value={dailyGoal} 
                        onChange={(e) => setDailyGoal(parseInt(e.target.value, 10))}
                        className="w-16 p-1 text-center rounded bg-slate-700"
                    />
                    <button onClick={handleDailyGoalSave} className="p-1 bg-green-500 text-white rounded-full hover:bg-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </button>
                </div>
            ) : (
                <button onClick={() => setIsEditingDailyGoal(true)} className="p-2 rounded-full hover:bg-slate-700">
                    <PencilIcon className="w-4 h-4 text-slate-400"/>
                </button>
            )}
        </StatCard>
        <StatCard icon={<CalendarIcon className="w-6 h-6 text-white"/>} label="이번 주 목표" value={`${wordsLearnedThisWeek} / ${stats.weeklyGoal} 단어`} color="bg-teal-500">
            {isEditingWeeklyGoal ? (
                <div className="flex items-center gap-2">
                    <input 
                        type="number" 
                        value={weeklyGoal} 
                        onChange={(e) => setWeeklyGoal(parseInt(e.target.value, 10))}
                        className="w-16 p-1 text-center rounded bg-slate-700"
                    />
                    <button onClick={handleWeeklyGoalSave} className="p-1 bg-green-500 text-white rounded-full hover:bg-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </button>
                </div>
            ) : (
                <button onClick={() => setIsEditingWeeklyGoal(true)} className="p-2 rounded-full hover:bg-slate-700">
                    <PencilIcon className="w-4 h-4 text-slate-400"/>
                </button>
            )}
        </StatCard>
        <StatCard icon={<BookOpenIcon className="w-6 h-6 text-white"/>} label="학습한 단어" value={totalWordsLearned} color="bg-green-500"/>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ActionButton 
          icon={<PlusCircleIcon className="w-8 h-8 text-white/50" />}
          title="단어추가 하기"
          subtitle="학습 목록에 새 단어 등록"
          onClick={() => onNavigate(AppView.ADD_WORD)}
          color="bg-gradient-to-br from-gray-700 to-gray-800"
        />
        <ActionButton 
          icon={<PlusCircleIcon className="w-8 h-8 text-white/50" />}
          title="플래시 카드 학습"
          subtitle="내가 추가한 단어 배우기"
          onClick={() => onNavigate(AppView.USER_WORD_FLASHCARDS)}
          color="bg-gradient-to-br from-teal-500 to-teal-600"
          count={userWordCount}
          disabled={userWordCount === 0}
        />
        <ActionButton 
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white/50" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" /></svg>}
          title="단어 퀴즈"
          subtitle={userAddedWordsCount < 4 ? "단어를 4개 이상 추가해주세요" : "추가한 단어로 뜻 맞추기"}
          onClick={() => onNavigate(AppView.QUIZ)}
          color="bg-gradient-to-br from-purple-500 to-purple-600"
          disabled={userAddedWordsCount < 4}
        />
        <ActionButton 
          icon={<PencilIcon className="w-8 h-8 text-white/50" />}
          title="철자 맞추기 퀴즈"
          subtitle={userAddedWordsCount === 0 ? "단어를 1개 이상 추가해주세요" : "추가한 단어로 조합하기"}
          onClick={() => onNavigate(AppView.SPELLING_BEE)}
          color="bg-gradient-to-br from-red-500 to-red-600"
          disabled={userAddedWordsCount === 0}
        />
        <ActionButton 
          icon={<ChartBarIcon className="w-8 h-8 text-white/50" />}
          title="학습 단어 목록"
          subtitle="내 단어장 전체 보기"
          onClick={() => onNavigate(AppView.WORD_LIST)}
          color="bg-gradient-to-br from-sky-500 to-sky-600"
          count={allWordsCount}
          disabled={allWordsCount === 0}
        />
        <ActionButton 
          icon={<BookOpenIcon className="w-8 h-8 text-white/50" />}
          title="복습 카드"
          subtitle="기억력 강화하기"
          onClick={() => onNavigate(AppView.REVIEW)}
          color="bg-gradient-to-br from-green-500 to-green-600"
          count={reviewCount}
          disabled={reviewCount === 0}
        />
      </div>
    </div>
  );
};

export default Dashboard;