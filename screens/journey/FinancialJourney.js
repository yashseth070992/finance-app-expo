import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
import FinancialJourneyContent from './FinancialJourneyContent';

const FinancialJourney = ({ setHeaderTitle }) => {
  const navigation = useNavigation();

  useEffect(() => {
    setHeaderTitle('Your Financial Journey');
  }, [setHeaderTitle]);

  const [age, setAge] = useState('');
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState('');
  const [debts, setDebts] = useState('');
  const [monthlyInvest, setMonthlyInvest] = useState('');
  const [investmentStrategy, setInvestmentStrategy] = useState('');

  const handleNextStep = () => {
    // You can add logic to save these responses and move to the next step
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FinancialJourneyContent />
      <Text style={styles.title}>Start Your Financial Journey</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Your Age"
          keyboardType="numeric"
          value={age}
          onChangeText={setAge}
        />
        <TextInput
          style={styles.input}
          placeholder="Monthly Income"
          keyboardType="numeric"
          value={income}
          onChangeText={setIncome}
        />
        <TextInput
          style={styles.input}
          placeholder="Monthly Expenses"
          keyboardType="numeric"
          value={expenses}
          onChangeText={setExpenses}
        />
        <TextInput
          style={styles.input}
          placeholder="Total Debts"
          keyboardType="numeric"
          value={debts}
          onChangeText={setDebts}
        />
        <TextInput
          style={styles.input}
          placeholder="How Much Can You Invest Monthly?"
          keyboardType="numeric"
          value={monthlyInvest}
          onChangeText={setMonthlyInvest}
        />
        <View style={styles.strategyContainer}>
          <Text style={styles.strategyLabel}>Investment Strategy:</Text>
          <View style={styles.strategySelect}>
            <Button
              title="Pay Off Debt First"
              onPress={() => setInvestmentStrategy('payDebtFirst')}
            />
            <Button
              title="Invest While Paying Debt"
              onPress={() => setInvestmentStrategy('investAndDebt')}
            />
            <Button
              title="Focus on Investing"
              onPress={() => setInvestmentStrategy('investOnly')}
            />
          </View>
        </View>
      </View>

      <Button title="Next Step" onPress={handleNextStep} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f4f8fc',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    fontSize: 24,
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 16,
    borderRadius: 8,
  },
  strategyContainer: {
    marginBottom: 16,
  },
  strategyLabel: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  strategySelect: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
});

export default FinancialJourney;
