import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import * as Expo from "expo";

import StartPage from "./StartPage";
import RegisterPage from "./RegisterPage";
import PersonalDetailPage from "./PersonalDetailPage";
import SetGoalPage from "./SetGoalPage";

import MainPage from "./MainPage";
import Statistic from "./Statistic";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer style={{ flex: 1 }}>
        <Stack.Navigator style={{ flex: 1 }}>
          <Stack.Screen
            style={{ flex: 1 }}
            name="StartPage"
            component={StartPage}
            options={{
              headerStyle: {
                backgroundColor: "#2B2B2B",
                height: 100,
              },
              headerTintColor: "#73AAFC",
              headerTitleStyle: {
                fontSize: 41,
              },
              headerTitle: "Aqualink", // set headerTitle to "Aqualink"
            }}
          />
          <Stack.Screen
            style={{ flex: 1 }}
            name="Register"
            component={RegisterPage}
            options={{
              headerStyle: {
                backgroundColor: "#2B2B2B",
                height: 100,
              },
              headerTintColor: "#73AAFC",
              headerTitleStyle: {
                fontSize: 41,
              },
              headerTitle: "Aqualink", // set headerTitle to "Aqualink"
            }}
          />
          <Stack.Screen
            style={{ flex: 1 }}
            name="PersonalDetailPage"
            component={PersonalDetailPage}
            options={{
              headerStyle: {
                backgroundColor: "#2B2B2B",
                height: 100,
              },
              headerTintColor: "#73AAFC",
              headerTitleStyle: {
                fontSize: 41,
              },
              headerTitle: "Aqualink", // set headerTitle to "Aqualink"
            }}
          />
          <Stack.Screen
            style={{ flex: 1 }}
            name="SetGoalPage"
            component={SetGoalPage}
            options={{
              headerStyle: {
                backgroundColor: "#2B2B2B",
                height: 100,
              },
              headerTintColor: "#73AAFC",
              headerTitleStyle: {
                fontSize: 41,
              },
              headerTitle: "Aqualink", // set headerTitle to "Aqualink"
            }}
          />
          <Stack.Screen
            style={{ flex: 1 }}
            name="MainPage"
            component={MainPage}
            options={{
              headerStyle: {
                backgroundColor: "#2B2B2B",
                height: 100,
              },
              headerTintColor: "#73AAFC",
              headerTitleStyle: {
                fontSize: 41,
              },
              headerTitle: "Aqualink", // set headerTitle to "Aqualink"
            }}
          />

          <Stack.Screen
            name="Statistic"
            component={Statistic}
            options={{
              headerStyle: {
                backgroundColor: "#2B2B2B",
                height: 100,
              },
              headerTintColor: "#73AAFC",
              headerTitleStyle: {
                fontSize: 41,
              },
              headerTitle: "Aqualink", // set headerTitle to "Aqualink"
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

function testClick() {
  console.log("press hhadsh");
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
