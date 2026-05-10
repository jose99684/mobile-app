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

import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const RegisterScreen = () => {

  // STATES
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // ERRORS
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // SHOW PASSWORD
  const [showPassword, setShowPassword] = useState(false);

  // FORM VALIDATION
  const isFormValid = firstName && lastName && phone && address && country && email && password;

  // VALIDATE EMAIL
  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // REGISTER
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

    Alert.alert(
      'Success',
      'Account created successfully'
    );

    router.push('/screens/RegisteredAccount');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.logo}>AVVILLAS</Text>

        <Text style={styles.subtitle}>
          Create your new account
        </Text>
      </View>

      {/* CARD */}
      <ScrollView
        style={styles.card}
        showsVerticalScrollIndicator={false}
      >

        <Text style={styles.title}>Register</Text>

        {/* FIRSTNAME */}
        <Text style={styles.label}>Firstname</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your firstname"
          placeholderTextColor="#94A3B8"
          value={firstName}
          onChangeText={(text) => {

            if (/^[a-zA-Z\s]*$/.test(text)) {
              setFirstName(text);
              setFirstNameError('');
            } else {
              setFirstNameError(
                'Only letters allowed'
              );
            }

          }}
        />

        {firstNameError ? (
          <Text style={styles.errorText}>
            {firstNameError}
          </Text>
        ) : null}

        {/* LASTNAME */}
        <Text style={styles.label}>Lastname</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your lastname"
          placeholderTextColor="#94A3B8"
          value={lastName}
          onChangeText={(text) => {

            if (/^[a-zA-Z\s]*$/.test(text)) {
              setLastName(text);
              setLastNameError('');
            } else {
              setLastNameError(
                'Only letters allowed'
              );
            }

          }}
        />

        {lastNameError ? (
          <Text style={styles.errorText}>
            {lastNameError}
          </Text>
        ) : null}

        {/* PHONE */}
        <Text style={styles.label}>Mobile phone</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your phone"
          placeholderTextColor="#94A3B8"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={(text) => {

            if (/^[0-9]*$/.test(text)) {
              setPhone(text);
              setPhoneError('');
            } else {
              setPhoneError(
                'Only numbers allowed'
              );
            }

          }}
        />

        {phoneError ? (
          <Text style={styles.errorText}>
            {phoneError}
          </Text>
        ) : null}

        {/* ADDRESS */}
        <Text style={styles.label}>Address</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your address"
          placeholderTextColor="#94A3B8"
          value={address}
          onChangeText={setAddress}
        />

        {/* COUNTRY */}
        <Text style={styles.label}>Country</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your country"
          placeholderTextColor="#94A3B8"
          value={country}
          onChangeText={(text) => {

            if (/^[a-zA-Z\s]*$/.test(text)) {
              setCountry(text);
            }

          }}
        />

        {/* EMAIL */}
        <Text style={styles.label}>Email</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#94A3B8"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => {

            setEmail(text);

            if (
              text.length > 0 &&
              !validateEmail(text)
            ) {
              setEmailError('Invalid email');
            } else {
              setEmailError('');
            }

          }}
        />

        {emailError ? (
          <Text style={styles.errorText}>
            {emailError}
          </Text>
        ) : null}

        {/* PASSWORD */}
        <Text style={styles.label}>Password</Text>

        <View style={styles.passwordContainer}>

          <TextInput
            style={styles.passwordInput}
            placeholder="Enter your password"
            placeholderTextColor="#94A3B8"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(text) => {

              setPassword(text);

              if (text.length < 6) {
                setPasswordError(
                  'Minimum 6 characters'
                );
              } else {
                setPasswordError('');
              }

            }}
          />

          <TouchableOpacity
            onPress={() =>
              setShowPassword(!showPassword)
            }
          >
            <Ionicons
              name={
                showPassword
                  ? 'eye-off'
                  : 'eye'
              }
              size={24}
              color="#64748B"
            />
          </TouchableOpacity>

        </View>

        {passwordError ? (
          <Text style={styles.errorText}>
            {passwordError}
          </Text>
        ) : null}

        {/* BUTTON */}
        <TouchableOpacity
          style={[styles.button, !isFormValid && styles.buttonDisabled]}
          onPress={handleRegister}
          disabled={!isFormValid}
        >
          <Text style={styles.buttonText}>
            Sign up
          </Text>
        </TouchableOpacity>

        {!isFormValid && (
          <Text style={styles.warningText}>
            Debe diligenciar todos los campos
          </Text>
        )}

        {/* LOGIN */}
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
    backgroundColor: '#e91414',
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

  passwordContainer: {
    backgroundColor: '#F1F5F9',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 20,
  },

  passwordInput: {
    flex: 1,
    paddingVertical: 15,
    fontSize: 16,
  },

  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: -15,
    marginBottom: 10,
    marginLeft: 5,
  },

  button: {
    backgroundColor: '#0F172A',
    padding: 18,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonDisabled: {
    opacity: 0.5,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },

  warningText: {
    color: 'red',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
  },

  link: {
    textAlign: 'center',
    marginTop: 25,
    color: '#2563EB',
    fontWeight: '600',
    marginBottom: 40,
  },

});