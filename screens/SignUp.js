import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  CheckBox,
  Button,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native'; // Import useTheme to get the theme

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptUpdates, setAcceptUpdates] = useState(false);
  const [error, setError] = useState(null); // State to hold error messages
  const navigation = useNavigation();
  const { colors } = useTheme(); // Get the theme colors

  const API_URL =
    'https://qki8l27mxb.execute-api.ap-south-1.amazonaws.com/signup';

  const handleSignUp = async () => {
    try {
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
        Alert.alert('Success', 'You have signed up successfully!');
        navigation.navigate('Login');
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
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor: colors.background },
      ]}
    >
      <Text style={[styles.headerText, { color: colors.text }]}>Sign up</Text>

      {error && (
        <Text style={[styles.errorText, { color: 'red' }]}>{error}</Text>
      )}

      <TextInput
        style={[
          styles.input,
          {
            borderColor: colors.borderColor,
            backgroundColor: colors.inputBackground,
            color: colors.text,
          },
        ]}
        placeholder="Full name"
        placeholderTextColor={colors.secondaryText}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={[
          styles.input,
          {
            borderColor: colors.borderColor,
            backgroundColor: colors.inputBackground,
            color: colors.text,
          },
        ]}
        placeholder="Email"
        placeholderTextColor={colors.secondaryText}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={[
          styles.input,
          {
            borderColor: colors.borderColor,
            backgroundColor: colors.inputBackground,
            color: colors.text,
          },
        ]}
        placeholder="Password"
        placeholderTextColor={colors.secondaryText}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <View style={styles.checkboxContainer}>
        <CheckBox
          value={acceptUpdates}
          onValueChange={setAcceptUpdates}
          tintColors={{ true: colors.primary, false: colors.secondaryText }}
        />
        <Text style={[styles.checkboxLabel, { color: colors.text }]}>
          I want to receive updates via email.
        </Text>
      </View>

      <Button title="Sign up" onPress={handleSignUp} color={colors.primary} />

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={[styles.loginText, { color: colors.text }]}>
          Already have an account?{' '}
          <Text style={[styles.loginLink, { color: colors.primary }]}>
            Sign in
          </Text>
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  errorText: {
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
    fontWeight: 'bold',
  },
});

export default SignUp;
