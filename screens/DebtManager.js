import React, { useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Picker,
} from 'react-native';
import { PieChartComponent } from '../components/PieChartComponent'; // Make sure to import your PieChartComponent
import { VictoryPie } from 'victory-native';

const DebtManager = ({ setHeaderTitle }) => {
  const [loanAmount, setLoanAmount] = React.useState('');
  const [remainingLoanAmount, setRemainingLoanAmount] = React.useState('');
  const [interestRate, setInterestRate] = React.useState('');
  const [emiDate, setEmiDate] = React.useState('');
  const [loanType, setLoanType] = React.useState('');
  const [loans, setLoans] = React.useState([]);

  const loanTypes = [
    'Personal Loan',
    'Auto Loan',
    'Home Loan',
    'Credit Card',
    'Student Loan',
  ];

  useEffect(() => {
    setHeaderTitle('Debt Manager');
  }, [setHeaderTitle]);

  const handleAddLoan = () => {
    const newLoan = {
      loanAmount: parseFloat(loanAmount),
      remainingLoanAmount: parseFloat(remainingLoanAmount),
      interestRate: parseFloat(interestRate),
      emiDate,
      loanType,
    };

    setLoans([...loans, newLoan]);
    resetFields();
  };

  const resetFields = () => {
    setLoanAmount('');
    setRemainingLoanAmount('');
    setInterestRate('');
    setEmiDate('');
    setLoanType('');
  };

  const getPieData = () => {
    const data = loans.reduce((acc, loan) => {
      const existingLoanType = acc.find((item) => item.name === loan.loanType);
      if (existingLoanType) {
        existingLoanType.value += loan.loanAmount;
      } else {
        acc.push({ name: loan.loanType, value: loan.loanAmount });
      }
      return acc;
    }, []);
    return data;
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Debt Overview</Text>
      <Text style={styles.description}>
        Manage your loans efficiently. Add details about your loans and
        visualize the distribution for better financial planning.
      </Text>

      <Text style={styles.subheading}>Add Loan Details</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Loan Amount"
          value={loanAmount}
          onChangeText={setLoanAmount}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Remaining Loan Amount"
          value={remainingLoanAmount}
          onChangeText={setRemainingLoanAmount}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Interest Rate (%)"
          value={interestRate}
          onChangeText={setInterestRate}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="EMI Date"
          value={emiDate}
          onChangeText={setEmiDate}
        />
        <Picker
          selectedValue={loanType}
          style={styles.picker}
          onValueChange={(itemValue) => setLoanType(itemValue)}
        >
          {loanTypes.map((type) => (
            <Picker.Item key={type} label={type} value={type} />
          ))}
        </Picker>
        <Button title="Add Loan" onPress={handleAddLoan} />
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Loan Distribution</Text>
        <PieChartComponent invested={getPieData()} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f8fc',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#7F8C8D',
    marginBottom: 20,
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 16,
    borderRadius: 8,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 16,
  },
  chartContainer: {
    padding: 20,
    marginTop: 20,
  },
  chartTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default DebtManager;
