// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

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
const db = getFirestore();

import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const RegisterPage = () => {
  console.log(db);
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
  };

  const handleNextPress = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    console.log(auth);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log("next press");

        const docRef = addDoc(collection(db, "users"), {
          userEmail: email,
        });

        navigation.navigate("PersonalDetailPage");
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  return (
    <View style={styles.registerContainer}>
      <Text style={styles.registerLabel}>Register</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={handleEmailChange}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={handlePasswordChange}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm your password"
          value={confirmPassword}
          onChangeText={handleConfirmPasswordChange}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleNextPress}>
        <Text style={styles.buttonText}>Next</Text>
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
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    alignSelf: "flex-start",
  },
  inputContainer: {
    width: "100%",
    marginVertical: 8,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    width: "100%",
    height: 48,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 16,
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
  errorText: {
    color: "red",
    fontSize: 14,
    marginBottom: 8,
  },
});
export default RegisterPage;
