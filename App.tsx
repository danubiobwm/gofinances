import React, { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider } from 'styled-components';
import { Dashboard } from './src/screens/Dashboard';
import { Register } from './src/screens/Register';
import { useFonts } from 'expo-font';
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
import theme from './src/global/styles/theme';
import { LogBox } from 'react-native';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  LogBox.ignoreLogs([
    'Found screens with the same name nested inside one another',
  ]);

  useEffect(() => {
    //previse que a SplashScreen saia de tela
    const showSplashScreen = async () => {
      await SplashScreen.preventAutoHideAsync();
    }
    showSplashScreen();
  }, []);

  useEffect(() => {
    //quando as fontes carregarem, desmonta a splash
    const hideSplashScreen = async () => {
      await SplashScreen.hideAsync();
    }
    if (fontsLoaded) {
      setAppIsReady(true);
      hideSplashScreen();
    }
  }, [fontsLoaded]);
  
  if (!appIsReady) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Register />
    </ThemeProvider>
  );
}
