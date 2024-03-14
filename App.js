import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./components/SplashScreen";
import Home from "./components/Home";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { useEffect, useState, useRef } from "react";
import { Text, View, Button, Platform } from "react-native";
import { registerForPushNotificationsAsync } from "./notification";

const Stack = createStackNavigator();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const App = () => {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
  // return (
  //   <Viewr
  //     style={{
  //       flex: 1,
  //       alignItems: 'center',
  //       justifyContent: 'space-around',
  //     }}>
  //     <Text>Your expo push token: {expoPushToken}</Text>
  //     <View style={{ alignItems: 'center', justifyContent: 'center' }}>
  //       <Text>Title: {notification && notification.request.content.title} </Text>
  //       <Text>Body: {notification && notification.request.content.body}</Text>
  //       <Text>Data: {notification && JSON.stringify(notification.request.content.data)}</Text>
  //     </View>
  //     <Button
  //       title="Press to schedule a notification"
  //       onPress={async () => {
  //         await schedulePushNotification();
  //       }}
  //     />
  //   </Viewr>
  // );
};

export default App;
