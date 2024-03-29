import { StyleSheet } from 'react-native';
import {
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_400Regular_Italic,
  Roboto_300Light_Italic,
  useFonts,
} from '@expo-google-fonts/roboto';

export const useGlobalStyles = () => {
  let [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_400Regular_Italic,
    Roboto_300Light_Italic,
  });

  if (!fontsLoaded) {
    return null;
  }

  const globalStyles = StyleSheet.create({
    light: {
      fontFamily: 'Roboto_300Light',
    },
    regular: {
      fontFamily: 'Roboto_400Regular',
    },
    medium: {
      fontFamily: 'Roboto_500Medium',
    },
    bold: {
      fontFamily: 'Roboto_700Bold',
    },
    regularItalic: {
      fontFamily: 'Roboto_400Regular_Italic',
    },
    lightItalic: {
      fontFamily: 'Roboto_300Light_Italic',
    },
  });

  return globalStyles;
};