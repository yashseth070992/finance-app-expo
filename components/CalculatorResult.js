import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import PieChartComponent from './PieChartComponent';
// import LineChartComponent from './LineChartComponent';
import { formatNumber } from '../helpers/formatNumber';
import { useTheme } from '@react-navigation/native'; // Import useTheme

const CalculatorResult = ({
  invested = 0,
  returns = 0,
  totalAmount = 0,
  calculatorType,
  chartData = [],
}) => {
  const { colors } = useTheme(); // Get colors from the current theme
  const [viewMode, setViewMode] = useState('chart');

  const initialInvestment = chartData.length > 0 ? chartData[0].initial : 0;
  const rate = chartData.length > 0 ? chartData[0].roi : 0;

  const roi = ((totalAmount - invested) / invested) * 100;

  const timeToDouble = rate > 0 ? 72 / rate : 0;

  return (
    <View style={[styles.container, { backgroundColor: colors.card }]}>
      <Text style={[styles.title, { color: colors.text }]}>
        Interest calculation for {chartData.length} years
      </Text>

      <View style={styles.valuesContainer}>
        <Text style={{ color: colors.text }}>Future investment value</Text>
        <Text style={[styles.value, { color: colors.text }]}>
          ₹{formatNumber(totalAmount)}
        </Text>

        <Text style={{ color: colors.text }}>Total interest earned</Text>
        <Text style={[styles.value, { color: colors.text }]}>
          ₹{formatNumber(returns)}
        </Text>

        <Text style={{ color: colors.text }}>Initial balance</Text>
        <Text style={[styles.value, { color: colors.text }]}>
          ₹{formatNumber(initialInvestment)}
        </Text>

        <Text style={{ color: colors.text }}>
          Yearly rate → Compounded rate
        </Text>
        <Text style={[styles.value, { color: colors.text }]}>
          {rate}% → Compounded Rate
        </Text>

        <Text style={{ color: colors.text }}>
          All-time rate of return (RoR)
        </Text>
        <Text style={[styles.value, { color: colors.text }]}>
          ↑ {roi.toFixed(2)}%
        </Text>

        <Text style={{ color: colors.text }}>
          Time needed to double investment
        </Text>
        <Text style={[styles.value, { color: colors.text }]}>
          {timeToDouble.toFixed(2)} years
        </Text>
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
              <Text style={{ color: colors.text }}>{item.year}</Text>
              <Text style={{ color: colors.text }}>
                ₹{formatNumber(parseFloat(item.invested))}
              </Text>
              <Text style={{ color: colors.text }}>
                ₹{formatNumber(parseFloat(item.profit))}
              </Text>
              <Text style={{ color: colors.text }}>
                ₹{formatNumber(parseFloat(item.compounded))}
              </Text>
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
