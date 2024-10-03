import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit'; // Import PieChart from react-native-chart-kit
import { useTheme } from '@react-navigation/native'; // Import useTheme

const screenWidth = Dimensions.get('window').width; // Get screen width dynamically

// Define chart config for styling
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

const COLORS = ['#4CAF50', '#FF9800']; // Define colors for slices

function PieChartComponent({ invested, returns }) {
  const { colors } = useTheme(); // Get colors from the current theme

  // Prepare the pie chart data
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

  // Filter out any data with zero values
  const filteredData = data.filter((item) => item.value > 0);

  // If no valid data, show a fallback message
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
        data={filteredData.map((item) => ({
          name: item.name,
          population: item.value,
          color: item.color,
          legendFontColor: item.legendFontColor,
          legendFontSize: item.legendFontSize,
        }))}
        width={screenWidth * 0.9} // Adjust width dynamically
        height={220}
        chartConfig={chartConfig}
        accessor="population" // This is the property holding the data values
        backgroundColor="transparent"
        paddingLeft="15"
        absolute // Show values inside slices
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
