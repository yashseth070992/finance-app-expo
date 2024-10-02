import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { VictoryChart, VictoryLine, VictoryAxis } from 'victory-native';
import { useTheme } from '@react-navigation/native'; // Import useTheme

const LineChartComponent = ({ data, chartTitle, xKey, yKeys }) => {
  const { colors } = useTheme(); // Get colors from the current theme

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.text }]}>{chartTitle}</Text>
      <VictoryChart width={300} height={200}>
        <VictoryAxis dependentAxis />
        <VictoryAxis />
        {yKeys.map((yKey, index) => (
          <VictoryLine
            key={yKey}
            data={data}
            x={xKey}
            y={yKey}
            style={{
              data: { stroke: index === 0 ? '#8884d8' : '#82ca9d' },
            }}
          />
        ))}
      </VictoryChart>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default LineChartComponent;
