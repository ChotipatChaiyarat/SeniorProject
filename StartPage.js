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

import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
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
        navigation.navigate("MainPage");

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
    <View style={styles.loginContainer}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={[styles.input, { width: 200 }]}
          placeholder="Email"
          value={email}
          onChangeText={handleEmailChange}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          style={[styles.input, { width: 200 }]}
          placeholder="Enter your password"
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
          Don't have an account? Register now
        </Text>
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
  loginContainer: {
    alignItems: "center",
    marginTop: 100,
  },
  loginLabel: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  input: {
    width: "80%",
    height: 48,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: "#007AFF",
    width: "80%",
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
  registerText: {
    color: "#007AFF",
    marginTop: 16,
  },
});

export default StartPage;
