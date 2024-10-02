import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity,CheckBox , StyleSheet, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = ({ setIsLoggedIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);
    const [rememberMe, setRememberMe] = useState(false);
    const navigation = useNavigation();

    const API_URL = 'https://qki8l27mxb.execute-api.ap-south-1.amazonaws.com/login';

    const handleLogin = async () => {
        setError(null); // Reset error on new attempt
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: email,
                    password: password,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                setIsLoggedIn(true);
                navigation.navigate('Dashboard');
            } else {
                const errorData = await response.json();
                setError(errorData.error || 'Login failed');
                Alert.alert('Error', errorData.error || 'Login failed');
            }
        } catch (err) {
            setError('Something went wrong, please try again.');
            Alert.alert('Error', 'Something went wrong, please try again.');
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.loginSection}>
                <Text style={styles.title}>Sign in</Text>
                {error && <Text style={styles.errorText}>{error}</Text>}
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry={!showPassword}
                        value={password}
                        onChangeText={setPassword}
                        autoCapitalize="none"
                    />
                    <TouchableOpacity
                        onPress={() => setShowPassword(!showPassword)}
                        style={styles.iconButton}
                    >
                        <Text style={styles.eyeIcon}>
                            {showPassword ? '👁️' : '👁️‍🗨️'}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.checkboxContainer}>
                    <CheckBox value={rememberMe} onValueChange={setRememberMe} />
                    <Text style={styles.checkboxLabel}>Remember me</Text>
                </View>
                <TouchableOpacity onPress={() => Alert.alert('Forgot Password')}>
                    <Text style={styles.forgotPassword}>Forgot your password?</Text>
                </TouchableOpacity>
                <Button title="Sign in" onPress={handleLogin} color="#1976d2" />
                <Text style={styles.signupText}>
                    Don't have an account?{' '}
                    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                        <Text style={styles.signupLink}>Sign up</Text>
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
        borderColor: '#ccc',
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
        color: '#1976d2',
        marginBottom: 20,
        textAlign: 'right',
    },
    signupText: {
        textAlign: 'center',
        marginTop: 20,
    },
    signupLink: {
        color: '#1976d2',
        fontWeight: 'bold',
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
        marginBottom: 10,
    },
});

export default Login;