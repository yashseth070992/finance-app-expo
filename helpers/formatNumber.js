export const formatNumber = (number) => {
  if (typeof number !== 'number' || isNaN(number)) {
    return '0';
  }

  if (number >= 1e7) {
    return (number / 1e7).toFixed(2) + ' Crore';
  } else if (number >= 1e5) {
    return (number / 1e5).toFixed(2) + ' Lakh';
  } else {
    return number.toLocaleString('en-IN'); // Format with commas (Indian number format)
  }
};
