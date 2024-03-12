import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import { useGlobalStyles } from "../globalStyles";

const styles = StyleSheet.create({
  title: {
    marginTop: StatusBar.currentHeight + 8,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#808080",
    paddingBottom: 8,
  },
});

const Title = () => {
  const globalStyles = useGlobalStyles();
  if (!globalStyles) {
    return <ActivityIndicator />; // Or some other placeholder
  }
  return (
    <View style={[styles.title]}>
      <Text style={[globalStyles.thin, { fontSize: 25 }]}>Intentionality</Text>
    </View>
  );
};

export default Title;
