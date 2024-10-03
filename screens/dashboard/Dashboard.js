import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
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

  // Set the header title only once when the Dashboard is rendered
  useEffect(() => {
    setHeaderTitle('Dashboard');
  }, [setHeaderTitle]); // No unnecessary re-renders

  // Create a list of components to render in the FlatList
  const sections = [
    { id: 'hero', component: <HeroSection /> },
    { id: 'tools', component: <FinancialToolsSection /> },
    { id: 'quotes', component: <QuotesCarousel /> },
    { id: 'manage', component: <ManageExploreSection /> },
    { id: 'static', component: <StaticContentSection /> },
    { id: 'rules', component: <FinanceRulesSection /> },
    { id: 'overview', component: <FinancialOverview /> },
    { id: 'footer', component: <FooterSection /> },
  ];

  return (
    <FlatList
      data={sections}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <View style={styles.section}>{item.component}</View>}
      contentContainerStyle={styles.container(colors)}
    />
  );
};

const styles = StyleSheet.create({
  container: (colors) => ({
    backgroundColor: colors.background,
    padding: 16,
  }),
  section: {
    marginBottom: 16,
  },
});

export default Dashboard;