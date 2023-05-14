// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD34lwVDHDRPgSLLmJpwdWMOc6kKJdBXx4",
  authDomain: "aqualink-fa989.firebaseapp.com",
  databaseURL:
    "https://aqualink-fa989-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "aqualink-fa989",
  storageBucket: "aqualink-fa989.appspot.com",
  messagingSenderId: "1041192730407",
  appId: "1:1041192730407:web:ced592c4cffdc33b447302",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const backgroundImage = require("./night2.jpeg"); // replace with the path to your image

import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
} from "react-native";

const StartPage = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleLoginPress = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigation.navigate("MainPage", { firstName: "Win", goal: 3.25 });

        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const handleRegisterPress = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <Image
          source={require("./2.png")}
          style={{ width: 150, height: 192 }}
        />

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={[styles.input, { width: 300, marginBottom: 15 }]}
            placeholder="you@example.com"
            value={email}
            onChangeText={handleEmailChange}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={[styles.input, { width: 300 }]}
            placeholder="Enter 6 characters or more"
            value={password}
            onChangeText={handlePasswordChange}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRegisterPress}>
          <Text style={styles.registerText}>
            Don't have an account?{" "}
            <Text
              style={{
                color: "rgba(255,255,255,0.9)",
                textDecorationLine: "underline",
              }}
            >
              Register now
            </Text>
          </Text>
        </TouchableOpacity>
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
    backgroundColor: "#2B2B2B",
    alignItems: "center",
    justifyContent: "center",
  },
  inputLabel: {
    color: "white",
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#fff",
    width: "80%",
    height: 48,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 16,
  },
  button: {
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
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  registerText: {
    color: "#3273c1",
    marginTop: 16,
  },
});

export default StartPage;
