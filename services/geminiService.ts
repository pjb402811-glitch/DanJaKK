import { Word, HanjaCharacter, Conversation, Idiom } from '../types';
import { PRIORITY_WORDS_DATA, INITIAL_CONVERSATIONS, RAW_IDIOMS, INITIAL_CHARACTERS } from './initialData';

// This function is kept for structure but now returns an empty array to prevent adding default words.
export const generateInitialWords = (): Word[] => {
  return [];
};

export const generateInitialPriorityWords = (): Word[] => {
  const rawData = PRIORITY_WORDS_DATA;

  const lines = rawData.trim().split('\n');
  const words: Word[] = [];
  
  let currentWord: string | null = null;

  for (const line of lines) {
    const trimmedLine = line.trim();
    if (!trimmedLine || trimmedLine.startsWith('_')) continue;

    const parts = trimmedLine.split('|');
    if (parts.length >= 2) {
         words.push({
            id: words.length + 1,
            word: parts[0].trim(),
            meaning: parts[1].trim(),
            isUserAdded: true,
        });
    }
  }
  
  return words;
};

export const generateInitialConversations = (): Conversation[] => {
  return INITIAL_CONVERSATIONS;
};

export const generateInitialIdioms = (): Idiom[] => {
  const rawIdioms = RAW_IDIOMS;

  const idioms = rawIdioms.map(item => ({
    id: item.n,
    expression: item.e.replace(/<[^>]*>?/gm, ''), // Strip HTML tags
    meaning: item.k,
    isUserAdded: true,
  }));

  // Merge conversations into idioms, avoiding duplicates
  const conversations = generateInitialConversations();
  const existingIdiomExpressions = new Set(idioms.map(i => i.expression.toLowerCase().replace(/[^a-z0-9]/g, '')));
  
  let nextId = idioms.length + 1;

  conversations.forEach(conv => {
    // Normalize for comparison (remove non-alphanumeric, lowercase)
    const normalizedExpression = conv.expression.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    if (!existingIdiomExpressions.has(normalizedExpression)) {
        idioms.push({
            id: nextId++,
            expression: conv.expression,
            meaning: conv.meaning,
            isUserAdded: true
        });
        existingIdiomExpressions.add(normalizedExpression);
    }
  });

  return idioms;
};

export const generateInitialCharacters = (): HanjaCharacter[] => {
    return INITIAL_CHARACTERS;
};
