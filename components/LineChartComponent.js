import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { VictoryChart, VictoryLine, VictoryAxis, VictoryLabel } from 'victory-native';

const LineChartComponent = ({ data, chartTitle, xKey, yKeys }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{chartTitle}</Text>
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
