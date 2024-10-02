import React from 'react';
import Calculator from './Calculator';

const SWPCalculator = ({ setHeaderTitle }) => {
  return (
    <Calculator
      setHeaderTitle={setHeaderTitle}
      title="SWP Calculator"
      calculatorType="swp"
      heading="Systematic Withdrawal Plan (SWP)"
      subheading="Discover how you can withdraw a fixed amount regularly from your investments while still allowing your capital to grow. Adjust the settings below to see how your withdrawals can impact your investment over time."
    />
  );
};

export default SWPCalculator;
