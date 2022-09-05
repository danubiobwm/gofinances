import React from "react";

import { ThemeProvider } from "styled-components";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import theme from "./src/global/styles/theme";
import { StatusBar } from "expo-status-bar";
import { Dashboard } from "./src/screens/Dashboard";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <>
      <ThemeProvider theme={theme} >
        <StatusBar style="auto" />
        <Dashboard />
      </ThemeProvider>
    </>
  );
}
