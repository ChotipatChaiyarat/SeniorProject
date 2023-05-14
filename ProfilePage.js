import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Pressable,
  Button,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";


const backgroundImage = require("./lake.jpeg"); // replace with the path to your image

export default function ProfilePage() {
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [weight, setWeight] = useState('John');
  const [height, setHeight] = useState('Doe');
  const [sex, setSex] = useState('John');
  const [age, setAge] = useState('Doe');
  const [dailyGoal, setDailyGoal] = useState('John');
  const [email, setEmail] = useState('Doe');
  const [password, setPassword] = useState('Doe');

  const navigation = useNavigation();

  const navigateToStatisticPage = () => {
    navigation.navigate("Statistic");
  };
    const navigateToHomePage = () => {
    navigation.navigate("MainPage");
  };

  return (
    <View style={styles.container}>
              <ImageBackground source={backgroundImage} style={styles.backgroundImage}>

      <Text style={styles.title}>Profile</Text>
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.label}>First Name:</Text>
          <Text style={styles.value}>{firstName}</Text>
          <Text style={styles.link} onPress={() => console.log('Change First Name')}>Change</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Last Name:</Text>
          <Text style={styles.value}>{lastName}</Text>
          <Text style={styles.link} onPress={() => console.log('Change Last Name')}>Change</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Weight:</Text>
          <Text style={styles.value}>{weight}</Text>
          <Text style={styles.link} onPress={() => console.log('Change Last Name')}>Change</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Height:</Text>
          <Text style={styles.value}>{height}</Text>
          <Text style={styles.link} onPress={() => console.log('Change Last Name')}>Change</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Sex:</Text>
          <Text style={styles.value}>{sex}</Text>
          <Text style={styles.link} onPress={() => console.log('Change Last Name')}>Change</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Age:</Text>
          <Text style={styles.value}>{age}</Text>
          <Text style={styles.link} onPress={() => console.log('Change Last Name')}>Change</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Daily Goal :</Text>
          <Text style={styles.value}>{dailyGoal}</Text>
          <Text style={styles.link} onPress={() => console.log('Change Last Name')}>Change</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>E-mail:</Text>
          <Text style={styles.value}>{email}</Text>
          <Text style={styles.link} onPress={() => console.log('Change Last Name')}>Change</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Password:</Text>
          <Text style={styles.value}>{password}</Text>
          <Text style={styles.link} onPress={() => console.log('Change Last Name')}>Change</Text>
        </View>
      </View>
      </ImageBackground>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[
            styles.footerButton,
            styles.firstMenu
          ]}
          title="Home"
          onPress={navigateToHomePage}
        >
          <View style={styles.iconContainer}>
            <Image style={styles.icon} source={require("./home.png")} />
            <Text style={styles.iconText}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.footerButton, styles.firstMenu]}
          title="Statistics"
          onPress={navigateToStatisticPage}
        >
          <View style={styles.iconContainer}>
            <Image style={styles.icon} source={require("./statistics.png")} />
            <Text style={styles.iconText}> Statistics</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.footerButton,{ backgroundColor: "rgba(0,0,0,0.1)", borderRadius: 15 }]}
          title="Profile"
        >
          <View style={styles.iconContainer}>
            <Image style={styles.icon} source={require("./profile-click.png")} />
            <Text style={[styles.iconText, { fontWeight: "bold" }]}>Profile</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
    alignItems: 'center',
    justifyContent: 'top',
    backgroundColor: '#fff',
    
  },
  title: {
    position:'relative',
    top:-50,
    color:'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  infoContainer: {
    position:'relative',
    top:-30,
    width: '100%',
    paddingHorizontal: 10,
  },
  infoItem: {
    padding:18,
    backgroundColor: "#f2f2f2",
    borderRadius:20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    flex: 1,
    fontWeight: 'bold',
    marginRight: 10,
  },
  value: {
    flex: 2,
    fontSize: 16,
  },
  link: {
    flex: 1,
    color: 'blue',
    fontSize: 16,
    textAlign: 'right',
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  hidden: {
    display: "none",
  },
  icon: {
    width: 25,
    height: 25,
    marginBottom: 7,
    position: "relative",
    top: 1,
  },
  iconText: {
    color: "black",
    fontSize: 15,
    position: "relative",
    top: 1,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    height: 0,
    position: "absolute",
    bottom: 30,
    width: "100%",
    borderRadius: 20,
    padding: 45,
  },
  firstButton: {
    marginRight: 35,
  },
  firstMenu: {
    marginRight: 20,
  },
  footerButton: {
    backgroundColor: "rgba(0,0,0,0)",
    width: 100,
    height: 70,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    flexDirection: "column",
    alignItems: "center",
  }
});
