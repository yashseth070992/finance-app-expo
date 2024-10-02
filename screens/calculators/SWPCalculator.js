import React from 'react';
import Calculator from './Calculator';
import { useTheme } from '@react-navigation/native'; // Import useTheme

const SWPCalculator = ({ setHeaderTitle }) => {
  const { colors } = useTheme(); // Get colors from the current theme

  return (
    <Calculator
      setHeaderTitle={setHeaderTitle}
      title="SWP Calculator"
      calculatorType="swp"
      heading="Systematic Withdrawal Plan (SWP)"
      subheading="Discover how you can withdraw a fixed amount regularly from your investments while still allowing your capital to grow. Adjust the settings below to see how your withdrawals can impact your investment over time."
      headingColor={colors.text} // Pass the heading color
      subheadingColor={colors.secondaryText} // Pass the subheading color
    />
  );
};

export default SWPCalculator;
