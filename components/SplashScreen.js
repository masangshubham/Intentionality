import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useGlobalStyles } from "../globalStyles";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Home");
    }, 1000);
    return () => clearTimeout(timer);
  }, [navigation]);

    const globalStyles = useGlobalStyles();

    if (!globalStyles) {
      return null;
    }

  return (
    <View style={styles.container}>
      <Text style={[globalStyles.regularItalic, styles.quote]}>
        "The future is not a matter of chance, it is a matter of choice; it
        depends on what you do today."
      </Text>
      <Text style={[globalStyles.regularItalic, styles.author]}>John F. Kennedy</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  quote: {
    fontSize: 25,
    textAlign: "center",
    marginBottom: 20,
  },
  author:{
    fontSize: 22,
    textAlign: "center",
  }
});

export default SplashScreen;
