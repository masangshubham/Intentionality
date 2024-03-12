import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useGlobalStyles } from "./globalStyles";
import Title from "./components/Title";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function App() {
  const globalStyles = useGlobalStyles();

  if (!globalStyles) {
    return <ActivityIndicator />; // Or some other placeholder
  }

  return (
    <SafeAreaProvider>
      <Title />
      <View style={styles.container}>
        <Text style={[globalStyles.bold, { fontSize: 30 }]}>
          Intentionality
        </Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}
