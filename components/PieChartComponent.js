import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit'; // Import PieChart from react-native-chart-kit

const screenWidth = Dimensions.get('window').width;
const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};
const COLORS = ['#4CAF50', '#FF9800'];

function PieChartComponent({ invested, returns }) {
  const data = [
    {
      name: 'Invested Amount',
      value: invested,
      color: COLORS[0],
      legendFontColor: '#7F8C8D',
      legendFontSize: 15,
    },
    {
      name: 'Estimated Returns',
      value: returns,
      color: COLORS[1],
      legendFontColor: '#7F8C8D',
      legendFontSize: 15,
    },
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
      <PieChart
        data={filteredData}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        accessor="value"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
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
