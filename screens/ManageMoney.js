import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import { PieChart } from 'react-native-chart-kit'; // Import PieChart from react-native-chart-kit
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons
import { Surface } from 'react-native-paper'; // Use Surface from react-native-paper
import { Picker } from '@react-native-picker/picker'; // Install this package separately

const ManageMoney = ({ setHeaderTitle }) => {
  useEffect(() => {
    setHeaderTitle('Manage Money');
  }, [setHeaderTitle]);

  const [income, setIncome] = useState('');
  const [expenseName, setExpenseName] = useState('');
  const [expenseType, setExpenseType] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseList, setExpenseList] = useState([]);
  const [savings, setSavings] = useState(0);

  const COLORS = ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0', '#9966FF'];

  const handleAddExpense = () => {
    if (expenseName && expenseType && expenseAmount) {
      const newExpense = {
        name: expenseName,
        type: expenseType,
        amount: parseFloat(expenseAmount),
      };
      const newExpenseList = [...expenseList, newExpense];
      setExpenseList(newExpenseList);
      const totalExpenses = newExpenseList.reduce(
        (acc, expense) => acc + expense.amount,
        0
      );
      setSavings(parseFloat(income) - totalExpenses);
      resetExpenseFields();
    }
  };

  const resetExpenseFields = () => {
    setExpenseName('');
    setExpenseType('');
    setExpenseAmount('');
  };

  const handleIncomeChange = (e) => {
    setIncome(e);
    const totalExpenses = expenseList.reduce(
      (acc, expense) => acc + expense.amount,
      0
    );
    setSavings(parseFloat(e) - totalExpenses);
  };

  const totalExpenses = expenseList.reduce(
    (acc, expense) => acc + expense.amount,
    0
  );

  const expenseTypeData = expenseList.reduce((acc, expense) => {
    const existingType = acc.find((item) => item.name === expense.type);
    if (existingType) {
      existingType.value += expense.amount;
    } else {
      acc.push({ name: expense.type, value: expense.amount });
    }
    return acc;
  }, []);

  const pieData = [
    { name: 'Savings', value: savings > 0 ? savings : 0 },
    ...expenseTypeData,
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Manage Your Money</Text>
      <Text style={styles.description}>
        Track your income, expenses, and savings.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Monthly Income"
        value={income}
        onChangeText={handleIncomeChange}
        keyboardType="numeric"
      />

      <Text style={styles.subheading}>Add New Expense</Text>
      <TextInput
        style={styles.input}
        placeholder="Expense Name"
        value={expenseName}
        onChangeText={setExpenseName}
      />
      <Picker
        selectedValue={expenseType}
        style={styles.picker}
        onValueChange={(itemValue) => setExpenseType(itemValue)}
      >
        <Picker.Item label="Food" value="Food" />
        <Picker.Item label="Transport" value="Transport" />
        <Picker.Item label="Entertainment" value="Entertainment" />
        <Picker.Item label="Others" value="Others" />
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Expense Amount"
        value={expenseAmount}
        onChangeText={setExpenseAmount}
        keyboardType="numeric"
      />
      <Button title="Add Expense" onPress={handleAddExpense} />

      <View style={styles.expenseListContainer}>
        <Text style={styles.expenseListTitle}>Expense List</Text>
        <Surface style={styles.surface}>
          {expenseList.length > 0 ? (
            <FlatList
              data={expenseList}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={styles.expenseItem}>
                  <Ionicons name="cash" size={20} color="#1ABC9C" />
                  <Text style={styles.expenseText}>
                    {item.name} - {item.type}: ₹{item.amount}
                  </Text>
                </View>
              )}
            />
          ) : (
            <Text>No expenses added yet.</Text>
          )}
        </Surface>
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Savings vs Expenses</Text>
        <Text style={styles.currentBalance}>Current Balance: ₹{savings}</Text>
        <Surface style={styles.surface}>
          <PieChart
            data={pieData.map((entry, index) => ({
              name: entry.name,
              population: entry.value,
              color: COLORS[index % COLORS.length],
              legendFontColor: '#7F8C8D',
              legendFontSize: 15,
            }))}
            width={300}
            height={300}
            chartConfig={{
              backgroundColor: 'transparent',
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            }}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
          />
        </Surface>
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
  expenseListContainer: {
    marginTop: 20,
  },
  expenseListTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  chartContainer: {
    marginTop: 20,
  },
  chartTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  currentBalance: {
    fontSize: 16,
    marginBottom: 10,
  },
  surface: {
    padding: 20,
    marginTop: 20,
    elevation: 4, // Adds shadow for Android
    borderRadius: 10, // Adds rounded corners
  },
  expenseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  expenseText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default ManageMoney;
