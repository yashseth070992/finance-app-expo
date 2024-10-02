import React from 'react';
import Calculator from './Calculator';
import { useTheme } from '@react-navigation/native'; // Import useTheme

const SIPCalculator = ({ setHeaderTitle }) => {
  const { colors } = useTheme(); // Get colors from the current theme

  return (
    <Calculator
      setHeaderTitle={setHeaderTitle}
      title="SIP Calculator"
      calculatorType="sip"
      heading="Systematic Investment Plan (SIP)"
      subheading="A Systematic Investment Plan (SIP) allows you to invest a fixed amount regularly in mutual funds. Adjust the inputs below to see how small changes in your monthly contribution or return rate can grow your wealth over time."
      headingColor={colors.text} // Pass the heading color
      subheadingColor={colors.secondaryText} // Pass the subheading color
    />
  );
};

export default SIPCalculator;
