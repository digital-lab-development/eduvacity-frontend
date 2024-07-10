export const capitalizeTitle = (title) => {
  const skipWords = [
    'a',
    'an',
    'the',
    'and',
    'but',
    'or',
    'for',
    'nor',
    'on',
    'at',
    'to',
    'by',
    'with',
  ];
  return title
    .split(' ')
    .map((word, i) => {
      if (skipWords.includes(word) && i !== 0) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
};
