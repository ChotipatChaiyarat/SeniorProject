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

const backgroundImage = require("./night2.jpeg"); // replace with the path to your image

import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
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
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.containerText}>
          <Text style={styles.registerLabel1}>Almost There!</Text>
          <Text style={styles.registerLabel2}>
            We are excited to see you here...
          </Text>
        </View>
        <View style={styles.iconContainer}>
          <Image
            source={require("./user.png")}
            style={{ width: 25, height: 25 }}
          />

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={handleEmailChange}
            />
          </View>
        </View>
        <View style={styles.iconContainer}>
          <Image
            source={require("./lock.png")}
            style={{ width: 25, height: 25 }}
          />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={handlePasswordChange}
              secureTextEntry={true}
            />
          </View>
        </View>
        <View style={styles.iconContainer}>
          <Image
            source={require("./lock.png")}
            style={{ width: 25, height: 25 }}
          />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChangeText={handleConfirmPasswordChange}
              secureTextEntry={true}
            />
          </View>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <TouchableOpacity style={styles.button} onPress={handleNextPress}>
            <Text style={styles.buttonText}>Next</Text>
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
    backgroundColor: "#2B2B2B",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    alignSelf: "flex-start",
  },
  inputContainer: {
    width: 350,
    marginVertical: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  containerText: {
    paddingLeft: 30,
    margin: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#fff",
    width: "75%",
    height: 48,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 16,
    marginLeft: -67,
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
  registerLabel1: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  registerLabel2: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    paddingTop: 25,
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
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "center",
    marginLeft: 47,
  },
});
export default RegisterPage;
