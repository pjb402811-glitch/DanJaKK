export interface Word {
  id: number;
  word: string;
  meaning: string;
  pronunciation: string;
  example: string;
  isUserAdded?: boolean;
}

export interface WordProgress {
  wordId: number;
  streak: number;
  lastReviewed: Date | null;
  nextReview: Date;
  correct: number;
  incorrect: number;
}

export interface UserStats {
  level: number;
  xp: number;
  xpToNextLevel: number;
  coins: number;
  dailyGoal: number;
  weeklyGoal: number;
}

export enum AppView {
  DASHBOARD,
  REVIEW,
  QUIZ,
  ADD_WORD,
  SPELLING_BEE,
  USER_WORD_FLASHCARDS,
  WORD_LIST,
  EDIT_WORD,
}

export enum QuizMode {
  MEANING,
  SPELLING,
}