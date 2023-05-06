import React, { useReducer } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
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

const SetGoalPage = () => {
  const navigation = useNavigation();

  const [dailyGoal, dispatch] = useReducer(goalReducer, 1.8);

  const handleFinishPress = () => {
    navigation.navigate("MainPage");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Set Your Daily Goal</Text>
      <Text style={styles.goal}>{`${dailyGoal.toFixed(1)}L`}</Text>
      <Text style={styles.goalDescription}>per day</Text>
      <Text style={styles.goalDescription}>
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
      <TouchableOpacity style={styles.finishButton} onPress={handleFinishPress}>
        <Text style={styles.finishButtonText}>Finish Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
  },
  goal: {
    fontSize: 80,
    fontWeight: "bold",
    color: "#007AFF",
    marginBottom: 16,
  },
  goalDescription: {
    fontSize: 16,
    marginBottom: 16,
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
  },
  buttonText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
  finishButton: {
    backgroundColor: "#007AFF",
    width: "80%",
    height: 48,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  finishButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default SetGoalPage;
