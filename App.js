// import { StatusBar } from "expo-status-bar";
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
import ProfilePage  from "./ProfilePage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer style={{ flex: 1 }}>
        <Stack.Navigator style={{ flex: 1 }} screenOptions={{
          headerShown: false,
          animationEnabled: false // Set animationEnabled to false
        }}>
          <Stack.Screen
            style={{ flex: 1 }}
            name="StartPage"
            component={StartPage}
            options={{
              headerShown: false,

              headerStyle: {
                backgroundColor: "#2B2B2B",
                height: 100,
              },
              headerTintColor: "#73AAFC",
              headerTitleStyle: {
                fontSize: 41,
              },
              headerTitle: "", // set headerTitle to "Aqualink"
            }}
          />
          <Stack.Screen
            style={{ flex: 1 }}
            name="Register"
            component={RegisterPage}
            options={{
              headerShown: false,

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
              headerShown: false,

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
              headerShown: false,

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
              headerShown: false,

              headerStyle: {
                backgroundColor: "#2B2B2B",
                height: 100,
              },
              headerTintColor: "#73AAFC",
              headerTitleStyle: {
                fontSize: 41,
              },
              headerTitle: "", // set headerTitle to "Aqualink"
            }}
          />

          <Stack.Screen
            name="Statistic"
            component={Statistic}
            options={{
              headerShown: false,
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
            name="Profile"
            component={ProfilePage}
            options={{
              headerShown: false,
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
