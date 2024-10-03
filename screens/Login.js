import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [rememberMe, setRememberMe] = useState(false);
  const navigation = useNavigation();
  const { colors } = useTheme();

  const handleLogin = async () => {
    // Add your login logic here
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
        <Text style={[styles.title, { color: colors.text }]}>Let's Begin</Text>
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
                flex: 1,
                borderColor: colors.borderColor,
                backgroundColor: colors.inputBackground,
                color: colors.text,
                paddingRight: 45, // Add padding to leave space for the icon
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
            <Ionicons
              name={showPassword ? 'eye' : 'eye-off'}
              size={24}
              color={colors.text}
            />
          </TouchableOpacity>
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
    marginBottom: 15,
  },
  iconButton: {
    position: 'absolute',
    right: 10,
    height: '100%', // Take full height to align the icon vertically
    justifyContent: 'center', // Center the icon vertically
    padding: 10,
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