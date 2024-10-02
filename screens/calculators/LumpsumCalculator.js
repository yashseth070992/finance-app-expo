import React from 'react';
import Calculator from './Calculator';

const LumpsumCalculator = ({ setHeaderTitle }) => {
  return (
    <Calculator
      setHeaderTitle={setHeaderTitle}
      title="Lumpsum Calculator"
      calculatorType="lumpsum"
      heading="Lumpsum Investment"
      subheading="Calculate how a one-time investment can grow over time."
    />
  );
};

export default LumpsumCalculator;