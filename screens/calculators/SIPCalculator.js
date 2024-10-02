import React from 'react';
import Calculator from './Calculator';

const SIPCalculator = ({ setHeaderTitle }) => {
  return (
    <Calculator
      setHeaderTitle={setHeaderTitle}
      title="SIP Calculator"
      calculatorType="sip"
      heading="Systematic Investment Plan (SIP)"
      subheading="A Systematic Investment Plan (SIP) allows you to invest a fixed amount regularly in mutual funds. Adjust the inputs below to see how small changes in your monthly contribution or return rate can grow your wealth over time."
    />
  );
};

export default SIPCalculator;
