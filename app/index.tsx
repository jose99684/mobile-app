import { router } from 'expo-router';
import React, { useEffect } from 'react';

import SplashScreen from './screens/SplashScreen';

export default function Index() {

  useEffect(() => {

    const timer = setTimeout(() => {
      router.replace('/screens/LoginScreen');
    }, 3000);

    return () => clearTimeout(timer);

  }, []);

  return <SplashScreen />;
}