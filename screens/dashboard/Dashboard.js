import React, { useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HeroSection from './HeroSection';
import QuotesCarousel from './QuotesCarousel';
import FinancialToolsSection from './FinancialToolsSection';
import StaticContentSection from './StaticContentSection';
import FinancialOverview from './FinancialOverview';
import FinanceRulesSection from './FinanceRulesSection';
import ManageExploreSection from './ManageExploreSection';
import FooterSection from "../../components/FooterSection";

const Dashboard = ({ setHeaderTitle }) => {
  const navigation = useNavigation();

  // Set the header title when Dashboard is rendered
  useEffect(() => {
    setHeaderTitle('Dashboard'); // Ensure this function is correctly passed
  }, [setHeaderTitle]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.pageContent}>
        <HeroSection />
         <FinancialToolsSection />
        <QuotesCarousel />
        <ManageExploreSection />
        <StaticContentSection />
        <FinanceRulesSection />
        <FinancialOverview /> 
      </View>
      <FooterSection />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f8fc',
    minHeight: '100%',
    padding: 16,
  },
  pageContent: {
    flexGrow: 1,
    backgroundColor: '#f4f8fc',
    padding: 16,
  },
});

export default Dashboard;