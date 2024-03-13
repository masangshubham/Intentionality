import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useGlobalStyles } from "../globalStyles";
import { ActivityIndicator } from "react-native";

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#808080",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});

const Footer = () => {
  const globalStyles = useGlobalStyles();

  if (!globalStyles) {
    return <ActivityIndicator />;
  }

  return (
    <View style={[styles.footer]}>
      <Text style={[globalStyles.lightItalic,{}]}>
        {/* “The present is all we have to live in. Or to lose” */}
        " No man is free who is not master of himself. "
        {/* "NO MAN IS FREE WHO IS NOT MASTER OF HIMSELF." */}
      </Text>
    </View>
  );
};

export default Footer;
