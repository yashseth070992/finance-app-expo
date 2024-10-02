import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import CalculatorInput from '../../components/CalculatorInput';
import CalculatorResult from '../../components/CalculatorResult';
import {
  getCalculatorInputs,
  calculateResults,
} from '../../helpers/calculatorHelper';
import { getResultValues } from '../../helpers/resultValuesHelper';

const Calculator = ({
  setHeaderTitle,
  title,
  calculatorType,
  heading,
  subheading,
}) => {
  const [values, setValues] = useState({
    investment: 50000,
    rate: 8,
    time: 10,
    withdrawal: 20000,
  });

  const [results, setResults] = useState({});

  const calculate = useCallback(() => {
    const calcResults = calculateResults(calculatorType, values);
    console.log('Calculated Results:', calcResults);
    return calcResults;
  }, [calculatorType, values]);

  useEffect(() => {
    setHeaderTitle(title);
    const calculated = calculate();
    const resultValues = getResultValues(calculatorType, calculated);
    setResults(resultValues);
  }, [setHeaderTitle, title, calculate, calculatorType]);

  const inputs = getCalculatorInputs(calculatorType, values, setValues);

  const resultLabels = {
    lumpsum: {
      investedLabel: 'Principal Amount',
      returnsLabel: 'Growth',
      totalLabel: 'Maturity Value',
    },
    sip: {
      investedLabel: 'Total Investment',
      returnsLabel: 'Total Returns',
      totalLabel: 'Future Value',
    },
    swp: {
      investedLabel: 'Total Withdrawals',
      returnsLabel: 'Total Returns',
      totalLabel: 'Remaining Balance',
    },
  }[calculatorType];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>{heading}</Text>
      <Text style={styles.subheading}>{subheading}</Text>

      <View style={styles.inputContainer}>
        <CalculatorInput inputs={inputs} />
      </View>

      <View style={styles.resultContainer}>
        <CalculatorResult
          invested={results.invested || 0}
          returns={results.returns || 0}
          totalAmount={results.totalAmount || 0}
          labels={resultLabels}
          calculatorType={calculatorType}
          extraWithdrawalMonths={results.extraWithdrawalMonths || 0}
          chartData={results.chartData || []}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f4f8fc',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 10,
  },
  subheading: {
    fontSize: 16,
    color: '#7F8C8D',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  resultContainer: {
    marginTop: 20,
  },
});

export default Calculator;
