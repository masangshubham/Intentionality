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
    marginTop: 8,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#808080",
    paddingBottom: 8,
    width: "100%",
  },
});

const Header = () => {
  const globalStyles = useGlobalStyles();
  if (!globalStyles) {
    return <ActivityIndicator />;
  }
  return (
    <View style={[styles.title]}>
      <Text style={[globalStyles.medium, { fontSize: 25 }]}>Intentionality</Text>
    </View>
  );
};

export default Header;
