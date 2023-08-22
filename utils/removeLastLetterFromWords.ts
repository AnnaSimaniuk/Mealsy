export const removeLastLetterFromWords = (words: string[]): string[] => {
  return words.map((word) => word.slice(0, -1));
};
