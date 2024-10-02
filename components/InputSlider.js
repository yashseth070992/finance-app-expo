import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Slider } from '@react-native-community/slider';

const InputSlider = ({ label, value, onValueChange, min = 1, max, step, suffix }) => {
  const [inputValue, setInputValue] = useState(value.toString());

  useEffect(() => {
    setInputValue(value.toString());
  }, [value]);

  const handleInputChange = (text) => {
    const numericValue = parseFloat(text) || 0;

    if (numericValue >= min) {
      setInputValue(text);
      onValueChange(numericValue);
    } else if (text === '') {
      setInputValue('');
    } else {
      setInputValue(min.toString());
      onValueChange(min);
    }
  };

  const handleBlur = () => {
    if (inputValue === '' || parseFloat(inputValue) < min) {
      setInputValue(min.toString());
      onValueChange(min);
    }
  };

  return (
    <View style={styles.sliderContainer}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={inputValue}
          onChangeText={handleInputChange}
          onBlur={handleBlur}
        />
        <Text style={styles.suffix}>{suffix}</Text>
      </View>
      <Slider
        style={styles.slider}
        value={parseFloat(inputValue) || min}
        minimumValue={min}
        maximumValue={max}
        step={step}
        onValueChange={(val) => {
          setInputValue(val.toString());
          onValueChange(parseFloat(val));
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginRight: 8,
  },
  suffix: {
    fontSize: 16,
  },
  slider: {
    width: '100%',
  },
});

export default InputSlider;