import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  DatePickerIOS,
  DatePickerAndroid,
} from "react-native";

const PersonalDetailPage = () => {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [sex, setSex] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const handleFirstNameChange = (text) => {
    setFirstName(text);
  };

  const handleLastNameChange = (text) => {
    setLastName(text);
  };

  const handleDateChange = (date) => {
    setDateOfBirth(date);
  };

  const handleSexChange = (value) => {
    setSex(value);
  };

  const handleWeightChange = (text) => {
    setWeight(text);
  };

  const handleHeightChange = (text) => {
    setHeight(text);
  };

  const handleDateAndroid = async () => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: dateOfBirth,
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        const selectedDate = new Date(year, month, day);
        setDateOfBirth(selectedDate);
      }
    } catch ({ code, message }) {
      console.warn("Cannot open date picker", message);
    }
  };

  const showIOSDatePicker = () => {
    return (
      <DatePickerIOS
        date={dateOfBirth}
        onDateChange={handleDateChange}
        mode="date"
      />
    );
  };

  const showAndroidDatePicker = () => {
    return (
      <TouchableOpacity onPress={handleDateAndroid}>
        <Text style={styles.input}>{dateOfBirth.toLocaleDateString()}</Text>
      </TouchableOpacity>
    );
  };

  const showDatePicker = () => {
    return Platform.OS === "ios"
      ? showIOSDatePicker()
      : showAndroidDatePicker();
  };

  const handleNextPress = () => {
    console.log("next press");
    navigation.navigate("SetGoalPage");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Personal Details</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={handleFirstNameChange}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={handleLastNameChange}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Date of Birth</Text>
        {showDatePicker()}
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Sex</Text>
        <View style={styles.radioContainer}>
          <TouchableOpacity
            style={styles.radio}
            onPress={() => handleSexChange("Male")}
          >
            <Text style={styles.radioText}>Male</Text>
            {sex === "Male" && <View style={styles.radioDot} />}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.radio}
            onPress={() => handleSexChange("Female")}
          >
            <Text style={styles.radioText}>Female</Text>
            {sex === "Female" && <View style={styles.radioDot} />}
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Weight (kg)</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your weight"
          value={weight}
          onChangeText={handleWeightChange}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Height (cm)</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your height"
          value={height}
          onChangeText={handleHeightChange}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button} onPress={handleNextPress}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 16,
  },
  inputLabel: {
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 16,
    height: 48,
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  radioLabel: {
    marginLeft: 8,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 32,
  },
  button: {
    backgroundColor: "#007AFF",
    width: "100%",
    height: 48,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default PersonalDetailPage;
