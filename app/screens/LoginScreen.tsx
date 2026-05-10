import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { router } from 'expo-router';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.header}>
        <Text style={styles.bankName}>AVVILLAS</Text>
        <Text style={styles.subtitle}>Secure Mobile Banking</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>LOGIN APP BANK</Text>

        <Text style={styles.label}>Email</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#94A3B8"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Password</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#94A3B8"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* BOTÓN LOGIN */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => router.push('/screens/HomeScreen')}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* BOTÓN REGISTER */}
        <TouchableOpacity
          onPress={() => router.push('/screens/RegisterScreen')}
        >
          <Text style={styles.registerText}>
            I don't have an account
          </Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DC2626',
  },

  header: {
    paddingHorizontal: 30,
    marginTop: 60,
    marginBottom: 30,
  },

  bankName: {
    color: '#FFFFFF',
    fontSize: 38,
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#F8FAFC',
    fontSize: 16,
    marginTop: 10,
  },

  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 25,
  },

  label: {
    color: '#64748B',
    fontSize: 15,
    marginBottom: 8,
    fontWeight: '600',
  },

  input: {
    backgroundColor: '#F1F5F9',
    borderRadius: 14,
    padding: 15,
    fontSize: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  loginButton: {
    backgroundColor: '#394658',
    padding: 18,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 10,
  },

  loginButtonText: {
    color: '#9CA3AF',
    fontSize: 18,
    fontWeight: '700',
  },

  registerText: {
    textAlign: 'center',
    marginTop: 25,
    color: '#2563EB',
    fontWeight: '600',
  },
});