import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import { useTheme } from '@react-navigation/native'; // Import useTheme

const HeroSection = () => {
  const navigation = useNavigation(); // Use the useNavigation hook
  const { colors } = useTheme(); // Get colors from the current theme

  return (
    <ImageBackground
      source={{ uri: 'your-gradient-background-url' }} // You can also create a gradient background with a library
      style={styles.container}
    >
      {/* Decorative Background Circles */}
      <View style={[styles.circle, styles.circle1]} />
      <View style={[styles.circle, styles.circle2]} />

      {/* Main Heading */}
      <Text style={[styles.heading, { color: colors.text }]}>
        Empower Your Financial Future
      </Text>

      {/* Supporting Text */}
      <Text style={[styles.supportingText, { color: colors.secondaryText }]}>
        Take control of your finances with personalized investment tools and
        insights. Learn the art of compounding and long-term growth to achieve
        your financial goals.
      </Text>

      {/* Call to Action Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.primaryButton, { backgroundColor: colors.primary }]}
          onPress={() => navigation.navigate('FinancialJourney')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.secondaryButton, { borderColor: colors.accent }]}
          onPress={() => navigation.navigate('LearnMore')}
        >
          <Text style={styles.buttonText}>Learn More</Text>
        </TouchableOpacity>
      </View>

      {/* Additional Info or Key Points */}
      <Text style={[styles.additionalInfo, { color: colors.secondaryText }]}>
        Whether you're planning for retirement, saving for a big purchase, or
        just looking to grow your wealth, our suite of financial tools will help
        guide you on your journey. Understand the power of compounding, optimize
        your investments, and unlock your financial potential.
      </Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 30,
    borderRadius: 20,
    position: 'relative',
    overflow: 'hidden',
  },
  circle: {
    position: 'absolute',
    borderRadius: 60,
    opacity: 0.4,
  },
  circle1: {
    top: -40,
    left: -40,
    height: 120,
    width: 120,
    backgroundColor: '#ff6b6b',
  },
  circle2: {
    bottom: -40,
    right: -40,
    height: 120,
    width: 120,
    backgroundColor: '#feca57',
  },
  heading: {
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 4,
    marginBottom: 10,
    fontSize: 24,
  },
  supportingText: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
    lineHeight: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  primaryButton: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginRight: 10,
  },
  secondaryButton: {
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  additionalInfo: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 20,
    lineHeight: 24,
  },
});

export default HeroSection;
