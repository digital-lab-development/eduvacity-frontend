export function truncateText(str, maxLength) {
  if (str?.length <= maxLength) {
    return str;
  } else {
    return str?.slice(0, maxLength) + '...';
  }
}

const getUrlLocation = () => {
  if (typeof window !== 'undefined') {
    const currentUrl = window.location.href;
    if (
      currentUrl.startsWith('https://test-portal.eduvacity.com') ||
      currentUrl.startsWith('https://test-portal.eduvacity.com/')
    ) {
      return 'test';
    } else if (currentUrl.startsWith('https://test-portal.eduvacity.com')) {
      return 'production';
    } else {
      return 'test';
    }
  }
};

const isProduction = getUrlLocation() === 'production' ? true : false;

export const apiEndpoint = isProduction
  ? 'https://api.eduvacity.com/api/v1'
  : 'https://test-api.eduvacity.com/api/v1';

export const goToPortal = isProduction
  ? 'https://portal.eduvacity.com'
  : 'https://test-portal.eduvacity.com';
