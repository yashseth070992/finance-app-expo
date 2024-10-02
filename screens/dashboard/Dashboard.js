import React, { useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import HeroSection from './HeroSection';
import QuotesCarousel from './QuotesCarousel';
import FinancialToolsSection from './FinancialToolsSection';
import StaticContentSection from './StaticContentSection';
import FinancialOverview from './FinancialOverview';
import FinanceRulesSection from './FinanceRulesSection';
import ManageExploreSection from './ManageExploreSection';
import FooterSection from '../../components/FooterSection';

const Dashboard = ({ setHeaderTitle }) => {
  const navigation = useNavigation();
  const { colors } = useTheme(); // Get colors from the current theme

  // Set the header title when Dashboard is rendered
  useEffect(() => {
    setHeaderTitle('Dashboard'); // Ensure this function is correctly passed
  }, [setHeaderTitle]);

  return (
    <ScrollView contentContainerStyle={styles.container(colors)}>
      <View style={styles.pageContent(colors)}>
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
  container: (colors) => ({
    backgroundColor: colors.background,
    minHeight: '100%',
    padding: 16,
  }),
  pageContent: (colors) => ({
    flexGrow: 1,
    backgroundColor: colors.background,
    padding: 16,
  }),
});

export default Dashboard;
