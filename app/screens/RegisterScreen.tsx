import React, { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { router } from 'expo-router';

const RegisterScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // VALIDAR EMAIL
  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // VALIDAR FORMULARIO
  const handleRegister = () => {
    if (
      !firstName ||
      !lastName ||
      !phone ||
      !address ||
      !country ||
      !email ||
      !password
    ) {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Error', 'Invalid email');
      return;
    }

    if (phone.length < 7) {
      Alert.alert('Error', 'Invalid phone number');
      return;
    }

    if (password.length < 6) {
      Alert.alert(
        'Error',
        'Password must contain at least 6 characters'
      );
      return;
    }

    Alert.alert('Success', 'Account created successfully');

    // REDIRIGIR AL LOGIN
    router.push('/');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.header}>
        <Text style={styles.logo}>NovaBank</Text>

        <Text style={styles.subtitle}>
          Create your new account
        </Text>
      </View>

      <ScrollView
        style={styles.card}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Register</Text>

        <Text style={styles.label}>Firstname</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your firstname"
          placeholderTextColor="#94A3B8"
          value={firstName}
          onChangeText={setFirstName}
        />

        <Text style={styles.label}>Lastname</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your lastname"
          placeholderTextColor="#94A3B8"
          value={lastName}
          onChangeText={setLastName}
        />

        <Text style={styles.label}>Mobile phone</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your phone"
          placeholderTextColor="#94A3B8"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />

        <Text style={styles.label}>Address</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your address"
          placeholderTextColor="#94A3B8"
          value={address}
          onChangeText={setAddress}
        />

        <Text style={styles.label}>Country</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your country"
          placeholderTextColor="#94A3B8"
          value={country}
          onChangeText={setCountry}
        />

        <Text style={styles.label}>Email</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#94A3B8"
          keyboardType="email-address"
          autoCapitalize="none"
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

        {/* BOTÓN REGISTRO */}
        <TouchableOpacity
          style={styles.button}
          onPress={handleRegister}
        >
          <Text style={styles.buttonText}>
            Sign up
          </Text>
        </TouchableOpacity>

        {/* VOLVER LOGIN */}
        <TouchableOpacity
          onPress={() => router.push('/')}
        >
          <Text style={styles.link}>
            I already have an account
          </Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },

  header: {
    paddingHorizontal: 30,
    marginTop: 50,
    marginBottom: 20,
  },

  logo: {
    color: '#FFFFFF',
    fontSize: 38,
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#CBD5E1',
    fontSize: 16,
    marginTop: 5,
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
    color: '#334155',
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

  button: {
    backgroundColor: '#0F172A',
    padding: 18,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },

  link: {
    textAlign: 'center',
    marginTop: 25,
    color: '#2563EB',
    fontWeight: '600',
    marginBottom: 40,
  },
});