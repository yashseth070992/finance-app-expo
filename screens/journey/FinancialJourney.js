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
import { useTheme } from '@react-navigation/native'; // Import useTheme

const FinancialJourney = ({ setHeaderTitle }) => {
  const navigation = useNavigation();
  const { colors } = useTheme(); // Get colors from the current theme

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
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor: colors.background },
      ]}
    >
      <FinancialJourneyContent />
      <Text style={[styles.title, { color: colors.text }]}>
        Start Your Financial Journey
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { borderColor: colors.borderColor }]}
          placeholder="Your Age"
          keyboardType="numeric"
          value={age}
          onChangeText={setAge}
        />
        <TextInput
          style={[styles.input, { borderColor: colors.borderColor }]}
          placeholder="Monthly Income"
          keyboardType="numeric"
          value={income}
          onChangeText={setIncome}
        />
        <TextInput
          style={[styles.input, { borderColor: colors.borderColor }]}
          placeholder="Monthly Expenses"
          keyboardType="numeric"
          value={expenses}
          onChangeText={setExpenses}
        />
        <TextInput
          style={[styles.input, { borderColor: colors.borderColor }]}
          placeholder="Total Debts"
          keyboardType="numeric"
          value={debts}
          onChangeText={setDebts}
        />
        <TextInput
          style={[styles.input, { borderColor: colors.borderColor }]}
          placeholder="How Much Can You Invest Monthly?"
          keyboardType="numeric"
          value={monthlyInvest}
          onChangeText={setMonthlyInvest}
        />
        <View style={styles.strategyContainer}>
          <Text style={[styles.strategyLabel, { color: colors.text }]}>
            Investment Strategy:
          </Text>
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

      <Button
        title="Next Step"
        onPress={handleNextStep}
        color={colors.primary}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
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
