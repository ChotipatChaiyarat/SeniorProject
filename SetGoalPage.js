import React, { useReducer } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const goalReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 0.1;
    case "DECREMENT":
      return state - 0.1;
    default:
      return state;
  }
};
const backgroundImage = require("./night2.jpeg"); // replace with the path to your image

const SetGoalPage = ({ route }) => {
  const navigation = useNavigation();
  const { weight, height } = route.params;
  console.log("weight=" + weight + "height =" + height);

  const [dailyGoal, dispatch] = useReducer(goalReducer, 1.8);

  const handleFinishPress = () => {
    navigation.navigate("MainPage");
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={styles.header}>Last Step!</Text>
          <Text style={styles.header}>Yore Recommended Water Intake Is..</Text>

          <Text style={styles.goal}>{`${dailyGoal.toFixed(1)}L`}</Text>
          <Text style={styles.goalDescription}>Per Day</Text>
          <Text style={styles.header}>
            You can always change this later in the settings
          </Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => dispatch({ type: "DECREMENT" })}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => dispatch({ type: "INCREMENT" })}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.finishButton}
            onPress={handleFinishPress}
          >
            <Text style={styles.finishButtonText}>Finish Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    zIndex: -99,
    resizeMode: "cover", // or "stretch" to stretch the image
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 32,
    color: "white",
  },
  goal: {
    fontSize: 80,
    fontWeight: "bold",
    color: "#007AFF",
    marginBottom: 16,
    elevation: 8, // controls the shadow depth
    shadowColor: "#4A90E2", // controls the shadow color
    shadowOpacity: 0.8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  goalDescription: {
    fontSize: 16,
    marginBottom: 16,
    color: "white",
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  button: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#007AFF",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16,
    elevation: 8, // controls the shadow depth
    shadowColor: "#4A90E2", // controls the shadow color
    shadowOpacity: 0.8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  buttonText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
  finishButton: {
    backgroundColor: "#3273c1",
    width: 300,
    height: 48,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    elevation: 8, // controls the shadow depth
    shadowColor: "#4A90E2", // controls the shadow color
    shadowOpacity: 0.8,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  finishButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default SetGoalPage;
