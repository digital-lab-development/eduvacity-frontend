export function truncateText(str, maxLength) {
  if (str?.length <= maxLength) {
    return str;
  } else {
    return str?.slice(0, maxLength) + '...';
  }
}

const isProduction = process.env.NODE_ENV === 'production';
export const goToPortal = isProduction
  ? 'https://test-portal.eduvacity.com'
  : 'http://portal.localhost:3000';
