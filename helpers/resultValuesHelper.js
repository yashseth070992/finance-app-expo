import {
  generateSIPChartData,
  generateLumpsumChartData,
  generateSWPChartData,
} from './chartDataHelpers';

export const getResultValues = (calculatorType, results) => {
  switch (calculatorType) {
    case 'sip': {
      const { invested, rate, time } = results;
      const chartData = generateSIPChartData(invested / time / 12, rate, time); // Correctly pass monthly investment
      return {
        invested, // Total invested
        returns: results.returns,
        totalAmount: results.total,
        chartData,
      };
    }

    case 'lumpsum': {
      const { invested, rate, time } = results;
      const chartData = generateLumpsumChartData(invested, rate, time);
      return {
        invested: invested || 0,
        returns: results.returns || 0,
        totalAmount: results.total || 0,
        chartData,
      };
    }

    case 'swp': {
      const { totalWithdrawals, rate, time } = results;
      const chartData = generateSWPChartData(totalWithdrawals, rate, time);
      return {
        invested: totalWithdrawals || 0,
        returns: results.returns || 0,
        totalAmount: results.remainingBalance || 0,
        chartData,
      };
    }

    default: {
      return {
        invested: 0,
        returns: 0,
        totalAmount: 0,
        chartData: [],
      };
    }
  }
};
