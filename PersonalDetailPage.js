import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  DatePickerIOS,
  DatePickerAndroid,
  ImageBackground,
  ScrollView,
} from "react-native";

const PersonalDetailPage = () => {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [sex, setSex] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const [current, setCurrent] = useState("test");

  const backgroundImage = require("./night2.jpeg"); // replace with the path to your image

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
      <View style={{ backgroundColor: "white", borderRadius: 20 }}>
        <DatePickerIOS
          date={dateOfBirth}
          onDateChange={handleDateChange}
          mode="date"
          locale="en"
          textColor="white"
        />
      </View>
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
    navigation.navigate("SetGoalPage", {
      weight: weight,
      height: height,
      firstName: firstName,
    });
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <ScrollView style={styles.container2}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.header}>Finishing Up!</Text>
            <Text style={styles.subheader}>Let us get to know you better</Text>

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
              <Text style={styles.inputLabel2}>Sex</Text>
            </View>
            <RadioButtonGroup
              containerStyle={{
                marginBottom: 25,

                flexDirection: "row",
                alignSelf: "left",
                position: "relative",
                left: 40,
              }}
              selected={sex}
              onSelected={(value) => setSex(value)}
              radioBackground="white"
            >
              <RadioButtonItem
                value="Male"
                label={
                  <Text style={{ color: "white", paddingRight: 50 }}>Male</Text>
                }
              />
              <RadioButtonItem
                value="Female"
                label={<Text style={{ color: "white" }}>Female</Text>}
              />
            </RadioButtonGroup>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Weight (kg)</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your weight"
                value={weight}
                onChangeText={handleWeightChange}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Height (cm)</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your height"
                value={height}
                onChangeText={handleHeightChange}
              />
              <TouchableOpacity style={styles.button} onPress={handleNextPress}>
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    alignItems: "center",
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
  container2: {
    backgroundColor: "transparent",
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  inputContainer: {
    width: "80%",
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
  },
  inputLabel2: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#fff",
    width: "100%",
    height: 48,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 16,
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
    backgroundColor: "#3273c1",
    width: "100%",
    height: 48,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
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
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
    paddingTop: "20%",
  },
  subheader: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    padding: "5%",
    alignSelf: "left",
    position: "relative",
    left: 20,
    color: "rgba(255,255,255,0.8)",
  },
});

export default PersonalDetailPage;
