// src/screens/HomeScreen.tsx

import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.centerContainer}>
        <Text style={styles.welcomeText}>
          Bienvenidos 👋
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },

  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  welcomeText: {
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: 'bold',
  },
});