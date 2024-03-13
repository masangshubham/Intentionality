import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import { useGlobalStyles } from "../globalStyles";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import EstimatedTime from "./EstimatedTime";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
});

const Home = () => {
  const globalStyles = useGlobalStyles();
  if (!globalStyles) {
    return <ActivityIndicator />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={{ flex: 1 }}>
        <Main />
      </View>
      <Footer />
    </SafeAreaView>
  );
};

export default Home;
