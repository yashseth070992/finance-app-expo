// ToggleSection.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import HeaderTabs from './HeaderTabs';
import SectionContent from './SectionContent';
import { sectionsConfig, sectionsData } from './data/sectionsData'; // Adjust the path as needed

const ToggleSection = () => {
  const [activeSection, setActiveSection] = useState('Goals'); // Default to 'Goals'

  return (
    <View style={styles.container}>
      {/* Header Tabs */}
      <HeaderTabs
        sectionsConfig={sectionsConfig}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      {/* Dynamic Section Content */}
      <SectionContent data={sectionsData[activeSection]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F4F8FC',
  },
});

export default ToggleSection;
