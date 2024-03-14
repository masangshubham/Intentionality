import React from "react";
import { useGlobalStyles } from "../globalStyles";
import { ActivityIndicator } from "react-native";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import * as Notifications from "expo-notifications";
import { useEffect } from "react";
import Constants from "expo-constants";
import { schedulePushNotification } from "../notification";

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
  },
  input: {
    marginTop: 20,
    fontSize: 20,
    padding: 10,
    fontStyle: "italic",
    borderBottomWidth: 1,
    borderBottomColor: "#808080",
  },
  instructions: {
    color: "#808080",
    marginVertical: 20,
    marginRight: 40,
    fontSize: 20,
  },
  button: {
    borderWidth: 1.5,
    borderColor: "#808080",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 10,
  },
  selectedButton: {
    backgroundColor: "#808080",
  },
  time: {
    fontSize: 20,
  },
  submitButton: {
    backgroundColor: "#F54646",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 50,
  },
  submitButtonText: {
    color: "white",
    fontSize: 16,
  },
});

const Main = () => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      intention: "",
      estimatedTime: "",
    },
  });
  const [selectedTime, setSelectedTime] = useState(null);

  const onSubmit = async (data) => {
    console.log(data);
    schedulePushNotification(
      `You have set an intention`,
      `Intention: ${data.intention}, Estimated time: ${data.estimatedTime} mins`
    );

    setTimeout(async () => {
      setInterval(() => {
        schedulePushNotification(
          `Reminder of your intention`,
          `Your intention was: ${data.intention}`
        );
      }, 2 * 60 * 1000);
    }, data.estimatedTime * 60 * 1000);
  };

  const handleButtonPress = (time) => {
    setSelectedTime(time);
    setValue("estimatedTime", time);
  };

  const globalStyles = useGlobalStyles();
  if (!globalStyles) {
    return <ActivityIndicator />;
  }
  return (
    <View style={{ alignContent: "center", marginTop: 80, margin: 20 }}>
      <Text style={[globalStyles.regular, styles.title]}>
        Intention for using the phone{" "}
      </Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input]}
            placeholder="enter your intention"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="intention"
      />
      {errors.intention && <Text>This is required.</Text>}
      <Text style={[globalStyles.regular, styles.title, { marginTop: 70 }]}>
        Estimated time
      </Text>
      <Text style={[styles.instructions, globalStyles.light]}>
        You’ll receive a notification after this time if you are still on your
        phone
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <TouchableOpacity
          style={[
            styles.button,
            selectedTime === "5" ? styles.selectedButton : null,
          ]}
          onPress={() => handleButtonPress("5")}
        >
          <Text style={[globalStyles.bold, styles.time]}>5 mins</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            selectedTime === "10" ? styles.selectedButton : null,
          ]}
          onPress={() => handleButtonPress("10")}
        >
          <Text style={[globalStyles.bold, styles.time]}>10 mins</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <TouchableOpacity
          style={[
            styles.button,
            selectedTime === "20" ? styles.selectedButton : null,
          ]}
          onPress={() => handleButtonPress("20")}
        >
          <Text style={[globalStyles.bold, styles.time]}>20 mins</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            selectedTime === "30" ? styles.selectedButton : null,
          ]}
          onPress={() => handleButtonPress("30")}
        >
          <Text style={[globalStyles.bold, styles.time]}>30 mins</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={styles.submitButtonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Main;
