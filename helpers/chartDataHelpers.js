export const generateSIPChartData = (monthlyInvestment, rate, time) => {
  const r = rate / 100 / 12; // Monthly interest rate
  const chartData = [];
  let totalInvested = 0;
  let compounded = 0;

  for (let year = 1; year <= time; year++) {
    totalInvested += monthlyInvestment * 12;

    compounded =
      monthlyInvestment * (((1 + r) ** (year * 12) - 1) / r) * (1 + r);

    chartData.push({
      year: `Year ${year}`,
      invested: totalInvested.toFixed(2),
      compounded: compounded.toFixed(2),
      profit: (compounded - totalInvested).toFixed(2),
      initial: monthlyInvestment,
      roi: rate,
    });
  }

  return chartData;
};

export const generateLumpsumChartData = (investment, rate, time) => {
  const r = rate / 100; // Annual interest rate
  const chartData = [];

  for (let year = 1; year <= time; year++) {
    const compounded = investment * (1 + r) ** year;

    chartData.push({
      year: `Year ${year}`,
      invested: investment.toFixed(2),
      compounded: compounded.toFixed(2),
      profit: (compounded - investment).toFixed(2),
      initial: investment,
      roi: rate,
    });
  }

  return chartData;
};

export const generateSWPChartData = (initialBalance, rate, time, monthlyWithdrawal) => {
  const r = rate / 100 / 12; // Monthly interest rate
  const chartData = [];
  let remainingBalance = initialBalance;

  for (let year = 1; year <= time; year++) {
    let yearlyInterest = 0;
    let yearlyWithdrawal = 0;

    for (let month = 1; month <= 12; month++) {
      const interestEarned = remainingBalance * r;
      remainingBalance += interestEarned;

      yearlyInterest += interestEarned;

      if (remainingBalance >= monthlyWithdrawal) {
        remainingBalance -= monthlyWithdrawal;
        yearlyWithdrawal += monthlyWithdrawal;
      } else {
        yearlyWithdrawal += remainingBalance;
        remainingBalance = 0;
        break;
      }
    }

    chartData.push({
      year: `Year ${year}`,
      remainingBalance: remainingBalance.toFixed(2),
      totalWithdrawals: yearlyWithdrawal.toFixed(2),
      totalInterestEarned: yearlyInterest.toFixed(2),
    });

    if (remainingBalance <= 0) break;
  }

  return chartData;
};