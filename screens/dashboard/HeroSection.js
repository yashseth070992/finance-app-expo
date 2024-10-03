import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@react-navigation/native';

const HeroSection = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  return (
    <ImageBackground
      source={require('../../assets/gradient_background.png')} // Ensure the path is correct
      style={styles.container}
      resizeMode="cover"
    >
      <View style={[styles.circle, styles.circle1]} />
      <View style={[styles.circle, styles.circle2]} />

      <Text style={[styles.heading, { color: colors.text }]}>
        Empower Your Financial Future
      </Text>

      <Text style={[styles.supportingText, { color: colors.secondaryText }]}>
        Take control of your finances with personalized investment tools and
        insights. Learn the art of compounding and long-term growth to achieve
        your financial goals.
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.primaryButton, { backgroundColor: colors.primary }]}
          onPress={() => navigation.navigate('FinancialJourney')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.secondaryButton,
            { borderColor: colors.buttonBackground },
          ]}
          onPress={() => navigation.navigate('LearnMore')}
        >
          <Text style={[styles.buttonText, { color: colors.buttonBackground }]}>
            Learn More
          </Text>
        </TouchableOpacity>
      </View>

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
    flex: 1, // Ensures it takes full height
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
    paddingHorizontal: 40,
    width: '100%', // Full width
    height: '100%', // Full height
    position: 'relative',
    overflow: 'hidden',
    minHeight: 400,
  },
  circle: {
    position: 'absolute',
    borderRadius: 60,
    opacity: 0.4,
  },
  circle1: {
    top: -50,
    left: -50,
    height: 150,
    width: 150,
    backgroundColor: '#ff6b6b',
  },
  circle2: {
    bottom: -50,
    right: -50,
    height: 150,
    width: 150,
    backgroundColor: '#feca57',
  },
  heading: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 3,
    marginBottom: 20,
    fontSize: 28,
    textAlign: 'center',
  },
  supportingText: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
    lineHeight: 26,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  primaryButton: {
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 25,
    marginRight: 15,
  },
  secondaryButton: {
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 25,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  additionalInfo: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 30,
    lineHeight: 24,
  },
});

export default HeroSection;
