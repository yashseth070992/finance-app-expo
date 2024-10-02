import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { LineChart } from 'react-native-chart-kit'; // Import LineChart from react-native-chart-kit
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons

const screenWidth = Dimensions.get('window').width; // Use screen width for the chart

const assetClasses = [
  {
    name: 'Stocks',
    avgROI: 12,
    risk: 'High',
    icon: <Ionicons name="trending-up" size={24} color="#000" />, // Stocks icon
  },
  {
    name: 'Bonds',
    avgROI: 5,
    risk: 'Low',
    icon: <Ionicons name="bar-chart" size={24} color="#000" />, // Bonds icon
  },
  {
    name: 'Gold',
    avgROI: 8,
    risk: 'Medium',
    icon: <Ionicons name="diamond" size={24} color="#000" />, // Precious metals icon
  },
  {
    name: 'Real Estate',
    avgROI: 7,
    risk: 'Medium to High',
    icon: <Ionicons name="home" size={24} color="#000" />, // Real estate icon
  },
  {
    name: 'Commodities',
    avgROI: 6,
    risk: 'High',
    icon: <Ionicons name="stats-chart" size={24} color="#000" />, // Commodities icon
  },
  {
    name: 'Cash and Cash Equivalents',
    avgROI: 1,
    risk: 'Very Low',
    icon: <Ionicons name="cash" size={24} color="#000" />, // Cash icon
  },
  {
    name: 'Foreign Exchange (Forex)',
    avgROI: 10,
    risk: 'High',
    icon: <Ionicons name="swap-horizontal" size={24} color="#000" />, // Forex icon
  },
  {
    name: 'Precious Metals',
    avgROI: 6,
    risk: 'Medium to High',
    icon: <Ionicons name="diamond" size={24} color="#000" />, // Precious metals icon (same as gold)
  },
  {
    name: 'Cryptocurrencies',
    avgROI: 20,
    risk: 'Very High',
    icon: <Ionicons name="logo-bitcoin" size={24} color="#000" />, // Cryptocurrencies icon
  },
  {
    name: 'Infrastructure',
    avgROI: 4,
    risk: 'Medium',
    icon: <Ionicons name="business" size={24} color="#000" />, // Infrastructure icon
  },
];

const AssetExplore = ({ setHeaderTitle }) => {
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    setHeaderTitle('Explore Asset Classes');
    if (assetClasses.length > 0) {
      handleAssetClick(assetClasses[0]); // Select the first asset by default
    }
  }, [setHeaderTitle]);

  const handleAssetClick = (asset) => {
    console.log('Selected Asset:', asset); // Log to verify asset selection
    setSelectedAsset(asset);
    const data = Array.from({ length: 11 }, (_, year) => ({
      name: `${year} Year${year === 1 ? '' : 's'}`,
      value: calculateFutureValue(10000, asset.avgROI, year),
    }));
    console.log('Chart Data:', data); // Log chart data to verify
    setChartData(data);
  };

  const calculateFutureValue = (principal, roi, years) => {
    return principal * Math.pow(1 + roi / 100, years);
  };

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'Very Low':
        return '#27AE60';
      case 'Low':
        return '#2ECC71';
      case 'Medium':
        return '#F1C40F';
      case 'Medium to High':
        return '#F39C12';
      case 'High':
        return '#E74C3C';
      case 'Very High':
        return '#C0392B';
      default:
        return '#34495E';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Explore and Compare Different Asset Classes
      </Text>
      <Text style={styles.subtitle}>
        Gain insights and compare various investment options to make informed
        decisions.
      </Text>

      <View style={styles.content}>
        {/* Asset List */}
        <View style={styles.assetContainer}>
          <FlatList
            data={assetClasses}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.assetItem}
                onPress={() => handleAssetClick(item)}
              >
                {item.icon}
                <Text style={styles.assetName}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Asset Details & Chart */}
        {selectedAsset && chartData.length > 0 && (
          <View style={styles.chartContainer}>
            <Text style={styles.detailsTitle}>
              {selectedAsset.name} Details
            </Text>
            <View style={styles.infoContainer}>
              <Text style={styles.infoLabel}>Average Return:</Text>
              <Text style={styles.infoValue}>{selectedAsset.avgROI}%</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.infoLabel}>Risk Level:</Text>
              <Text
                style={[
                  styles.infoValue,
                  { color: getRiskColor(selectedAsset.risk) },
                ]}
              >
                {selectedAsset.risk}
              </Text>
            </View>

            <LineChart
              data={{
                labels: chartData.map((item) => item.name),
                datasets: [
                  {
                    data: chartData.map((item) => item.value),
                  },
                ],
              }}
              width={screenWidth * 0.6} // Ensure chart width doesn't overlap
              height={220}
              chartConfig={{
                backgroundColor: '#f4f8fc',
                backgroundGradientFrom: '#f4f8fc',
                backgroundGradientTo: '#ffffff',
                decimalPlaces: 2, // optional, defaults to 2
                color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
              }}
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
            <Text style={styles.projectionText}>
              Projected Growth Over 10 Years
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f4f8fc',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1ABC9C',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#BDC3C7',
    textAlign: 'center',
    marginBottom: 16,
  },
  content: {
    flexDirection: 'row', // Row layout to separate asset list and chart
    flex: 1,
  },
  assetContainer: {
    flex: 0.4, // 40% of screen width for the asset list
    borderRightWidth: 1,
    borderRightColor: '#ccc',
    padding: 8,
  },
  assetItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  assetName: {
    marginLeft: 10,
  },
  chartContainer: {
    flex: 0.6, // 60% of screen width for the chart
    padding: 16,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    elevation: 3,
  },
  detailsTitle: {
    fontSize: 20,
    color: '#1ABC9C',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  infoLabel: {
    fontWeight: 'bold',
  },
  infoValue: {
    fontSize: 16,
    color: '#34495E',
  },
  projectionText: {
    textAlign: 'center',
    marginTop: 16,
    fontWeight: 'bold',
  },
});

export default AssetExplore;
