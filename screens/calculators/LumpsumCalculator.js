import React from 'react';
import Calculator from './Calculator';
import { useTheme } from '@react-navigation/native'; // Import useTheme

const LumpsumCalculator = ({ setHeaderTitle }) => {
  const { colors } = useTheme(); // Get colors from the current theme

  return (
    <Calculator
      setHeaderTitle={setHeaderTitle}
      title="Lumpsum Calculator"
      calculatorType="lumpsum"
      heading="Lumpsum Investment"
      subheading="Calculate how a one-time investment can grow over time."
      headingColor={colors.text} // Pass the heading color
      subheadingColor={colors.secondaryText} // Pass the subheading color
    />
  );
};

export default LumpsumCalculator;
