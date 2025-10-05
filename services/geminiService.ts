
import { Word } from '../types';

const MOCK_WORDS: Word[] = [
  { id: 1, word: 'adventure', meaning: '모험', pronunciation: '/ədˈven.tʃər/', example: 'Going to the old castle was a real adventure.' },
  { id: 2, word: 'brave', meaning: '용감한', pronunciation: '/breɪv/', example: 'The brave knight fought the dragon.' },
  { id: 3, word: 'challenge', meaning: '도전', pronunciation: '/ˈtʃæl.ɪndʒ/', example: 'Climbing the mountain was a big challenge.' },
  { id: 4, word: 'discover', meaning: '발견하다', pronunciation: '/dɪˈskʌv.ər/', example: 'She was excited to discover a hidden cave.' },
  { id: 5, word: 'explore', meaning: '탐험하다', pronunciation: '/ɪkˈsplɔːr/', example: 'Let\'s go explore the forest.' },
  { id: 6, word: 'curious', meaning: '호기심 많은', pronunciation: '/ˈkjʊə.ri.əs/', example: 'The cat was curious about the new toy.' },
  { id: 7, word: 'imagine', meaning: '상상하다', pronunciation: '/ɪˈmædʒ.ɪn/', example: 'Can you imagine a world without colors?' },
  { id: 8, word: 'knowledge', meaning: '지식', pronunciation: '/ˈnɒl.ɪdʒ/', example: 'He has a great knowledge of history.' },
  { id: 9, word: 'puzzle', meaning: '퍼즐', pronunciation: '/ˈpʌz.əl/', example: 'This jigsaw puzzle is very difficult.' },
  { id: 10, word: 'victory', meaning: '승리', pronunciation: '/ˈvɪk.tər.i/', example: 'The team celebrated their victory.' },
  { id: 11, word: 'journey', meaning: '여행', pronunciation: '/ˈdʒɜː.ni/', example: 'They went on a long journey across the country.' },
  { id: 12, word: 'magic', meaning: '마법', pronunciation: '/ˈmædʒ.ɪk/', example: 'The wizard performed a magic trick.' },
  { id: 13, word: 'mystery', meaning: '미스터리', pronunciation: '/ˈmɪs.tər.i/', example: 'The detective solved the mystery of the stolen jewel.' },
  { id: 14, word: 'quest', meaning: '탐구, 탐색', pronunciation: '/kwest/', example: 'The hero went on a quest to find a rare flower.' },
  { id: 15, word: 'solution', meaning: '해결책', pronunciation: '/səˈluː.ʃən/', example: 'She found a simple solution to the complex problem.' },
];


export const generateInitialWords = (): Word[] => {
  return MOCK_WORDS;
};