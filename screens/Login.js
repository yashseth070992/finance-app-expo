import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  CheckBox,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native'; // Import useTheme to get the theme

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [rememberMe, setRememberMe] = useState(false);
  const navigation = useNavigation();
  const { colors } = useTheme(); // Get colors from the current theme

  const API_URL =
    'https://qki8l27mxb.execute-api.ap-south-1.amazonaws.com/login';

  const handleLogin = async () => {
    setIsLoggedIn(true);
    navigation.navigate('Dashboard');
  };

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor: colors.background },
      ]}
    >
      <View style={styles.loginSection}>
        <Text style={[styles.title, { color: colors.text }]}>Sign in</Text>
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
          placeholder="Email"
          placeholderTextColor={colors.secondaryText}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <View style={styles.passwordContainer}>
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
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.iconButton}
          >
            <Text style={styles.eyeIcon}>{showPassword ? '👁️' : '👁️‍🗨️'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={rememberMe}
            onValueChange={setRememberMe}
            tintColors={{ true: colors.primary, false: colors.secondaryText }}
          />
          <Text style={[styles.checkboxLabel, { color: colors.text }]}>
            Remember me
          </Text>
        </View>
        <TouchableOpacity onPress={() => Alert.alert('Forgot Password')}>
          <Text style={[styles.forgotPassword, { color: colors.primary }]}>
            Forgot your password?
          </Text>
        </TouchableOpacity>
        <Button title="Sign in" onPress={handleLogin} color={colors.primary} />
        <Text style={[styles.signupText, { color: colors.text }]}>
          Don't have an account?{' '}
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={[styles.signupLink, { color: colors.primary }]}>
              Sign up
            </Text>
          </TouchableOpacity>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  loginSection: {
    marginBottom: 20,
  },
  title: {
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
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    position: 'absolute',
    right: 10,
  },
  eyeIcon: {
    fontSize: 24,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 16,
  },
  forgotPassword: {
    marginBottom: 20,
    textAlign: 'right',
  },
  signupText: {
    textAlign: 'center',
    marginTop: 20,
  },
  signupLink: {
    fontWeight: 'bold',
  },
  errorText: {
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default Login;
