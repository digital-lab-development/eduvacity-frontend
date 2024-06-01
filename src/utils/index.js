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
      currentUrl.startsWith('https://test.eduvacity.com') ||
      currentUrl.startsWith('https://test.eduvacity.com/')
    ) {
      return 'test';
    } else if (currentUrl.startsWith('https://eduvacity.com')) {
      return 'production';
    } else {
      return 'test';
    }
  }
};

const isProduction = process.env.NODE_ENV || 'production';

export const apiEndpoint = 'https://api.eduvacity.com/api/v1';

export const goToPortal =
  isProduction === 'production'
    ? 'https://portal.eduvacity.com'
    : 'https://test-portal.eduvacity.com';

export const ngnCurrencyFormatter = (value) => {
  let formattedAmount = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
  }).format(value);

  return formattedAmount.replace('NGN', '₦');
};
