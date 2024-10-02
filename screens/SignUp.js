import React, { useState } from 'react';
import { View, Text, TextInput,CheckBox, Button, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptUpdates, setAcceptUpdates] = useState(false);
  const [error, setError] = useState(null); // State to hold error messages
  const navigation = useNavigation();

  // API URL of your Elastic Beanstalk signup endpoint
  const API_URL = 'https://qki8l27mxb.execute-api.ap-south-1.amazonaws.com/signup';

  const handleSignUp = async () => {
    try {
      // Make the API call to the signup endpoint
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: name,
          email: email,
          password: password,
          acceptUpdates: acceptUpdates,
        }),
      });

      if (response.ok) {
        // On success, redirect to the login page
        Alert.alert('Success', 'You have signed up successfully!');
        navigation.navigate('Login'); // Navigate to Login screen
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Sign-up failed');
        Alert.alert('Error', errorData.error || 'Sign-up failed');
      }
    } catch (err) {
      console.error('Error signing up:', err);
      setError('Something went wrong, please try again.');
      Alert.alert('Error', 'Something went wrong, please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Sign up</Text>

      {error && (
        <Text style={styles.errorText}>{error}</Text>
      )}

      {/* Full Name Input */}
      <TextInput
        style={styles.input}
        placeholder="Full name"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      {/* Checkbox */}
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={acceptUpdates}
          onValueChange={setAcceptUpdates}
        />
        <Text style={styles.checkboxLabel}>I want to receive updates via email.</Text>
      </View>

      {/* Sign Up Button */}
      <Button
        title="Sign up"
        onPress={handleSignUp}
        color="#1976d2"
      />

      {/* Login Redirect */}
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>
          Already have an account? <Text style={styles.loginLink}>Sign in</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 16,
  },
  loginText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  loginLink: {
    color: '#1976d2',
    fontWeight: 'bold',
  },
});

export default SignUp;