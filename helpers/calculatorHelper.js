export const getCalculatorInputs = (type, values, setValues) => {
  const { investment, rate, time, withdrawal } = values;

  switch (type) {
    case 'lumpsum':
      return [
        {
          label: 'Principal Amount',
          value: investment,
          setValue: (val) =>
            setValues((prev) => ({ ...prev, investment: val })),
          min: 1000,
          max: 1000000,
          step: 1000,
          suffix: '₹',
        },
        {
          label: 'Expected Return Rate (Annual)',
          value: rate,
          setValue: (val) => setValues((prev) => ({ ...prev, rate: val })),
          min: 1,
          max: 20,
          step: 0.5,
          suffix: '%',
        },
        {
          label: 'Time Period (Years)',
          value: time,
          setValue: (val) => setValues((prev) => ({ ...prev, time: val })),
          min: 1,
          max: 30,
          step: 1,
          suffix: 'Yr',
        },
      ];
    case 'sip':
      return [
        {
          label: 'Monthly Investment',
          value: investment,
          setValue: (val) =>
            setValues((prev) => ({ ...prev, investment: val })),
          min: 1000,
          max: 1000000,
          step: 1000,
          suffix: '₹',
        },
        {
          label: 'Expected Return Rate (Annual)',
          value: rate,
          setValue: (val) => setValues((prev) => ({ ...prev, rate: val })),
          min: 1,
          max: 20,
          step: 0.5,
          suffix: '%',
        },
        {
          label: 'Time Period (Years)',
          value: time,
          setValue: (val) => setValues((prev) => ({ ...prev, time: val })),
          min: 1,
          max: 30,
          step: 1,
          suffix: 'Yr',
        },
      ];
    case 'swp':
      return [
        {
          label: 'Investment Amount',
          value: investment,
          setValue: (val) =>
            setValues((prev) => ({ ...prev, investment: val })),
          min: 1000,
          max: 10000000,
          step: 1000,
          suffix: '₹',
        },
        {
          label: 'Expected Return Rate',
          value: rate,
          setValue: (val) => setValues((prev) => ({ ...prev, rate: val })),
          min: 1,
          max: 20,
          step: 0.5,
          suffix: '%',
        },
        {
          label: 'Monthly Withdrawal Amount',
          value: withdrawal,
          setValue: (val) =>
            setValues((prev) => ({ ...prev, withdrawal: val })),
          min: 1000,
          max: 100000,
          step: 1000,
          suffix: '₹',
        },
      ];
    default:
      return [];
  }
};
export const calculateResults = (type, values) => {
  const { investment, rate, time, withdrawal } = values;

  switch (type) {
    case 'sip': {
      const P = investment; // Monthly investment
      const r = rate / 100 / 12; // Monthly interest rate
      const n = time * 12; // Total number of months

      // Correct future value calculation for SIP
      const futureValue = P * (((1 + r) ** n - 1) / r) * (1 + r);
      const estimatedReturns = futureValue - P * n;
      const investedAmount = P * n; // Total investment (monthly * number of months)

      return {
        invested: investedAmount, // Total invested across months
        total: futureValue, // Future value after compounding
        returns: estimatedReturns, // Total returns after compounding
        rate,
        time,
      };
    }
    case 'lumpsum': {
      const P = investment;
      const r = rate / 100;
      const A = P * (1 + r) ** time; // Future value formula
      const estimatedReturns = A - P;
      const investedAmount = P;

      return {
        invested: investedAmount,
        total: A,
        returns: estimatedReturns,
        rate,
        time,
      };
    }
    case 'swp': {
      let P = investment;
      const r = rate / 100 / 12; // Monthly interest rate
      let totalWithdrawals = 0;
      let remainingBalance = P;
      let months = 0;

      while (months < 120) {
        // Limit to 120 months (10 years)
        const interestEarned = remainingBalance * r;
        remainingBalance += interestEarned;

        if (remainingBalance >= withdrawal) {
          remainingBalance -= withdrawal;
          totalWithdrawals += withdrawal;
        } else {
          totalWithdrawals += remainingBalance;
          remainingBalance = 0;
          break;
        }

        months += 1;
      }

      const totalReturns = Math.max(remainingBalance - P, 0);
      return {
        totalWithdrawals,
        remainingBalance: Math.max(remainingBalance, 0),
        returns: totalReturns,
        extraWithdrawalMonths: months,
        rate,
        time,
      };
    }
    default:
      return {};
  }
};
