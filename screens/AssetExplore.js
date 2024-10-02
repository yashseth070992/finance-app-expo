import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { LineChart } from 'react-native-chart-kit'; // Import LineChart from react-native-chart-kit
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons

const assetClasses = [
  {
    name: 'Stocks',
    avgROI: 12,
    risk: 'High',
    icon: <Ionicons name="cash" size={24} />,
  },
  {
    name: 'Bonds',
    avgROI: 5,
    risk: 'Low',
    icon: <Ionicons name="bar-chart" size={24} />,
  },
  {
    name: 'Gold',
    avgROI: 8,
    risk: 'Medium',
    icon: <Ionicons name="diamond" size={24} />,
  },
  {
    name: 'Real Estate',
    avgROI: 7,
    risk: 'Medium to High',
    icon: <Ionicons name="home" size={24} />,
  },
  {
    name: 'Commodities',
    avgROI: 6,
    risk: 'High',
    icon: <Ionicons name="trophy" size={24} />,
  },
  {
    name: 'Cash and Cash Equivalents',
    avgROI: 1,
    risk: 'Very Low',
    icon: <Ionicons name="wallet" size={24} />,
  },
  {
    name: 'Foreign Exchange (Forex)',
    avgROI: 10,
    risk: 'High',
    icon: <Ionicons name="earth" size={24} />,
  },
  {
    name: 'Precious Metals',
    avgROI: 6,
    risk: 'Medium to High',
    icon: <Ionicons name="star" size={24} />,
  },
  {
    name: 'Cryptocurrencies',
    avgROI: 20,
    risk: 'Very High',
    icon: <Ionicons name="logo-bitcoin" size={24} />,
  },
  {
    name: 'Infrastructure',
    avgROI: 4,
    risk: 'Medium',
    icon: <Ionicons name="build" size={24} />,
  },
];

const AssetExplore = ({ setHeaderTitle }) => {
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    setHeaderTitle('Explore Asset Classes');
    if (assetClasses.length > 0) {
      handleAssetClick(assetClasses[0]);
    }
  }, [setHeaderTitle]);

  const handleAssetClick = (asset) => {
    setSelectedAsset(asset);
    const data = Array.from({ length: 11 }, (_, year) => ({
      name: `${year} Year${year === 1 ? '' : 's'}`,
      value: calculateFutureValue(10000, asset.avgROI, year),
    }));
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

      {selectedAsset && (
        <View style={styles.assetDetails}>
          <Text style={styles.detailsTitle}>{selectedAsset.name} Details</Text>
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
            width={300}
            height={200}
            chartConfig={{
              backgroundColor: '#f4f8fc',
              backgroundGradientFrom: '#f4f8fc',
              backgroundGradientTo: '#ffffff',
              decimalPlaces: 2, // optional, defaults to 2
              color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
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
  assetContainer: {
    borderRightWidth: 1,
    borderRightColor: '#ccc',
  },
  assetItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  assetName: {
    marginLeft: 10,
  },
  assetDetails: {
    marginTop: 16,
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
