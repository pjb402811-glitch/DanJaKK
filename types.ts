
export interface Word {
  id: number;
  word: string;
  meaning: string;
  pronunciation: string;
  example: string;
  isUserAdded?: boolean;
}

export interface HanjaCharacter {
  id: number;
  character: string;
  sound: string;
  meaning: string;
}

export interface WordProgress {
  wordId: number;
  correct: number;
  incorrect: number;
  lastReviewed: string | null;
  nextReview: string | null;
  streak: number;
}

export interface HanjaCharacterProgress {
  characterId: number;
  correct: number;
  incorrect: number;
  lastReviewed: string | null;
  nextReview: string | null;
  streak: number;
}

export interface UserStats {
  xp: number;
  coins: number;
  dailyGoal: number;
  weeklyGoal: number;
  lastLogin: string;
}

export enum AppView {
  DASHBOARD = 'DASHBOARD',
  REVIEW = 'REVIEW',
  USER_WORD_FLASHCARDS = 'USER_WORD_FLASHCARDS',
  QUIZ = 'QUIZ',
  ADD_WORD = 'ADD_WORD',
  SPELLING_BEE = 'SPELLING_BEE',
  WORD_LIST = 'WORD_LIST',
  EDIT_WORD = 'EDIT_WORD',
  CHEONJAMUN_FLASHCARDS = 'CHEONJAMUN_FLASHCARDS',
  CHEONJAMUN_REVIEW = 'CHEONJAMUN_REVIEW',
  CHEONJAMUN_LIST = 'CHEONJAMUN_LIST',
  HANJA_QUIZ = 'HANJA_QUIZ',
  FOUR_CHAR_QUIZ = 'FOUR_CHAR_QUIZ'
}

export type LearningMode = 'ENGLISH' | 'HANJA';
