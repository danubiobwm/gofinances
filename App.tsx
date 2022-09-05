import React, { useCallback } from "react";

import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import theme from "./src/global/styles/theme";
import { StatusBar } from "expo-status-bar";
import { Dashboard } from "./src/screens/Dashboard";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaView } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <>
      <SafeAreaView onLayout={onLayoutRootView}>
        <ThemeProvider theme={theme}>
          <StatusBar style="auto" />
          <Dashboard />
        </ThemeProvider>
      </SafeAreaView>
    </>
  );
}
