import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { VictoryPie } from 'victory-native';

const COLORS = ['#4CAF50', '#FF9800'];

function PieChartComponent({ invested, returns }) {
  const data = [
    { name: 'Invested Amount', value: invested },
    { name: 'Estimated Returns', value: returns },
  ];

  const filteredData = data.filter((item) => item.value > 0);

  if (filteredData.length === 0) {
    return (
      <View style={styles.noDataContainer}>
        <Text>No data available for the chart.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <VictoryPie
        data={filteredData}
        x="name"
        y="value"
        colorScale={COLORS}
        labelRadius={({ innerRadius }) => innerRadius + 20} // Adjust label radius
        style={{
          labels: { fill: 'white' },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  noDataContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
});

export default PieChartComponent;