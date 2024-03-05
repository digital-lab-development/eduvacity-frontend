export function truncateText(str, maxLength) {
  if (str?.length <= maxLength) {
    return str;
  } else {
    return str?.slice(0, maxLength) + '...';
  }
}

const isProduction = process.env.NODE_ENV === 'production';

export const apiEndpoint = isProduction
  ? 'https://api.eduvacity.com/api/v1'
  : 'https://test-api.eduvacity.com/api/v1';

export const goToPortal = isProduction
  ? 'https://test-portal.eduvacity.com'
  : 'http://portal.localhost:3000';
