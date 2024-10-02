import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import  Slider  from '@react-native-community/slider';
import { TextInput } from 'react-native-paper'; // Using react-native-paper for TextInput

const CalculatorInput = ({ inputs }) => {
  return (
    <View style={styles.container}>
      {inputs.map((input) => (
        <View key={input.label} style={styles.inputGroup}>
          <Text style={styles.label}>{input.label}</Text>
          <TextInput
            style={styles.input}
            mode="outlined"
            value={input.value.toString()}
            onChangeText={(value) => input.setValue(Number(value))}
            keyboardType="numeric"
            right={<TextInput.Affix text={input.suffix} />}
          />
          <Slider
            style={styles.slider}
            value={input.value}
            onValueChange={(val) => input.setValue(val)}
            minimumValue={input.min}
            maximumValue={input.max}
            step={input.step}
            minimumTrackTintColor="#1FB28B" // Customize color
            maximumTrackTintColor="#D3D3D3" // Customize color
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f4f8fc',
    borderRadius: 8,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    marginBottom: 10,
  },
  slider: {
    width: '100%',
    height: 40,
  },
});

export default CalculatorInput;
