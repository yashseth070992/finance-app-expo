import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Slider,
  FlatList,
} from 'react-native';

const SetGoals = ({ setHeaderTitle }) => {
  useEffect(() => {
    setHeaderTitle('Establish Your Financial Objectives');
  }, [setHeaderTitle]);

  const [sliderValues, setSliderValues] = useState({
    targetCorpus: 100000,
    currentAge: 25,
    yearsToAchieve: 10,
    returnRate: 8,
  });

  const [showPlan, setShowPlan] = useState(false);

  const handleSliderChange = (key, value) => {
    setSliderValues((prev) => ({ ...prev, [key]: value }));
  };

  const calculateFutureValue = (P, r, n) => {
    return P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
  };

  const calculateYearsToAchieveTarget = (P, r, targetCorpus) => {
    let cumulativeSavings = 0;
    let time = 0;

    while (cumulativeSavings < targetCorpus) {
      cumulativeSavings += P;
      cumulativeSavings *= 1 + r;
      time++;
    }

    return time - (cumulativeSavings - targetCorpus) / (P * (1 + r));
  };

  const convertYearsToYearsAndMonths = (decimalYears) => {
    const years = Math.floor(decimalYears);
    const months = Math.round((decimalYears - years) * 12);
    return months === 12 ? { years: years + 1, months: 0 } : { years, months };
  };

  const renderPlan = () => {
    const { targetCorpus, yearsToAchieve, returnRate } = sliderValues;
    const annualSavings = targetCorpus / yearsToAchieve;
    const r = returnRate / 100;

    const yearsRequired = calculateYearsToAchieveTarget(
      annualSavings,
      r,
      targetCorpus
    );
    const { years, months } = convertYearsToYearsAndMonths(yearsRequired);

    const futureValue = calculateFutureValue(annualSavings, r, yearsToAchieve);

    return (
      <View style={styles.planContainer}>
        <Text style={styles.planTitle}>Your Financial Plan</Text>
        <Text>
          To achieve your target corpus of{' '}
          <strong>₹{targetCorpus.toLocaleString()}</strong> with an interest
          rate of <strong>{sliderValues.returnRate}%</strong>, you will need
          approximately
          <strong> {years} years</strong> and <strong> {months} months</strong>{' '}
          of investment.
        </Text>
        <Text>
          If you continue contributing the same amount for{' '}
          <strong>{yearsToAchieve} years</strong>, your investment is projected
          to grow to approximately{' '}
          <strong>₹{Math.floor(futureValue).toLocaleString()}</strong>.
        </Text>

        <FlatList
          data={[...Array(yearsToAchieve)].map((_, index) => ({
            year: index + 1,
            saved: Math.floor(annualSavings),
            cumulative: Math.floor(
              calculateFutureValue(annualSavings, r, index + 1)
            ),
          }))}
          keyExtractor={(item) => item.year.toString()}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <Text>{item.year}</Text>
              <Text>₹{item.saved.toLocaleString()}</Text>
              <Text>₹{item.cumulative.toLocaleString()}</Text>
            </View>
          )}
        />
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Set Your Financial Goals</Text>
      <Text style={styles.subheading}>
        Plan your financial future by setting clear goals and see how your
        savings can help you achieve them.
      </Text>

      <View style={styles.sliderContainer}>
        <Text>Target Corpus (₹)</Text>
        <Slider
          value={sliderValues.targetCorpus}
          onValueChange={(val) => handleSliderChange('targetCorpus', val)}
          minimumValue={50000}
          maximumValue={10000000}
          step={10000}
        />
      </View>

      <View style={styles.sliderContainer}>
        <Text>Current Age</Text>
        <Slider
          value={sliderValues.currentAge}
          onValueChange={(val) => handleSliderChange('currentAge', val)}
          minimumValue={18}
          maximumValue={70}
          step={1}
        />
      </View>

      <View style={styles.sliderContainer}>
        <Text>Years to Achieve</Text>
        <Slider
          value={sliderValues.yearsToAchieve}
          onValueChange={(val) => handleSliderChange('yearsToAchieve', val)}
          minimumValue={1}
          maximumValue={50}
          step={1}
        />
      </View>

      <View style={styles.sliderContainer}>
        <Text>Expected Return Rate (%)</Text>
        <Slider
          value={sliderValues.returnRate}
          onValueChange={(val) => handleSliderChange('returnRate', val)}
          minimumValue={1}
          maximumValue={20}
          step={0.5}
        />
      </View>

      <Button title="Plan it Out" onPress={() => setShowPlan(true)} />

      {showPlan && renderPlan()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f4f8fc',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subheading: {
    fontSize: 16,
    marginBottom: 20,
    color: '#7F8C8D',
  },
  sliderContainer: {
    marginBottom: 20,
  },
  planContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 3,
  },
  planTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
});

export default SetGoals;
