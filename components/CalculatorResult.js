import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
} from 'react-native';
import PieChartComponent from './PieChartComponent';
import LineChartComponent from './LineChartComponent';
import { formatNumber } from '../helpers/formatNumber';

const CalculatorResult = ({
  invested = 0,
  returns = 0,
  totalAmount = 0,
  calculatorType,
  chartData = [],
}) => {
  const [viewMode, setViewMode] = useState('chart');

  const initialInvestment = chartData.length > 0 ? chartData[0].initial : 0;
  const rate = chartData.length > 0 ? chartData[0].roi : 0;

  const roi = ((totalAmount - invested) / invested) * 100;

  const timeToDouble = rate > 0 ? 72 / rate : 0;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Interest calculation for {chartData.length} years</Text>

      <View style={styles.valuesContainer}>
        <Text>Future investment value</Text>
        <Text style={styles.value}>₹{formatNumber(totalAmount)}</Text>

        <Text>Total interest earned</Text>
        <Text style={styles.value}>₹{formatNumber(returns)}</Text>

        <Text>Initial balance</Text>
        <Text style={styles.value}>₹{formatNumber(initialInvestment)}</Text>

        <Text>Yearly rate → Compounded rate</Text>
        <Text style={styles.value}>{rate}% → Compounded Rate</Text>

        <Text>All-time rate of return (RoR)</Text>
        <Text style={styles.value}>↑ {roi.toFixed(2)}%</Text>

        <Text>Time needed to double investment</Text>
        <Text style={styles.value}>{timeToDouble.toFixed(2)} years</Text>
      </View>

      <View style={styles.toggleContainer}>
        <Text style={styles.toggleLabel}>View:</Text>
        <Button title="Chart" onPress={() => setViewMode('chart')} />
        <Button title="Table" onPress={() => setViewMode('table')} />
      </View>

      {viewMode === 'chart' ? (
        <View style={styles.chartContainer}>
          <PieChartComponent invested={invested} returns={returns} />
          {/* Uncomment the LineChartComponent as needed */}
          {/* <LineChartComponent data={chartData} /> */}
        </View>
      ) : (
        <FlatList
          data={chartData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <Text>{item.year}</Text>
              <Text>₹{formatNumber(parseFloat(item.invested))}</Text>
              <Text>₹{formatNumber(parseFloat(item.profit))}</Text>
              <Text>₹{formatNumber(parseFloat(item.compounded))}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  valuesContainer: {
    marginBottom: 20,
  },
  value: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 4,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  toggleLabel: {
    fontSize: 16,
  },
  chartContainer: {
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
});

export default CalculatorResult;