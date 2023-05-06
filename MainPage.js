import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Button,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProgressCircle from "react-native-progress-circle";
import { useNavigation } from "@react-navigation/native";

const backgroundImage = require("./lake.jpeg"); // replace with the path to your image
const THINGSPEAK_API_KEY = "OJIMVVEWZSOFHMWG";
const CHANNEL_ID = "2075755";
const FIELD_ID = "2";

function MainPage() {
  const [waterLevel, setWaterLevel] = useState(50); // Set initial water level
  const [data, setData] = useState(null);

  useEffect(() => {
    const url =
      "https://api.thingspeak.com/channels/2075755/fields/1.json?api_key=S0V3XE45CSH0MGXH&results=2";

    const interval = setInterval(() => {
      axios
        .get(url)
        .then((response) => {
          setData(response.data.feeds[1].field1);
          console.log(response.data.feeds[1].field1);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1000); // set the interval time to 10 minutes

    return () => clearInterval(interval); // clear the interval on component unmount
  }, []);

  const navigation = useNavigation();

  const navigateToStatisticPage = () => {
    navigation.navigate("Statistic");
  };

  function power(base, exponent) {
    return Math.exp(Math.log(base) * exponent);
  }

  function calculateVolume(param) {
    step1 = param / 1190784;
    step2 = power(step1, 1.235238);
    x =
      -512388100 +
      (666.6169 + 512388100) / (1 + power(param / 1190784, 1.235238));
    console.log(step1);
    console.log(step2);
    a = Math.round(x / 5) * 5;
    console.log(a);

    return a;
  }

  calculateVolume(data);

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <Text style={styles.welcome}>Welcome back, Win</Text>

        <View></View>
        <View>
          <View style={{ margin: 30, position: "relative", bottom: 40 }}>
            <ProgressCircle
              percent={80}
              radius={150}
              borderWidth={30}
              color="#3273c1"
              shadowColor="rgba(255,255,255,0.7)"
              bgColor="white"
            >
              <Text style={{ fontSize: 30 }}>{calculateVolume(data)}</Text>
              <Text style={{ fontSize: 18 }}>{"/ Day"}</Text>
            </ProgressCircle>
          </View>
        </View>

        <View style={styles.container1}>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.numbers}>132 ml</Text>
            <Text style={styles.explan}>NOW</Text>
          </View>
          <View style={styles.verticleLine}></View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.numbers}>750 ml</Text>
            <Text style={styles.explan}>GOAL</Text>
          </View>
        </View>
        <Text style={{ color: "white" }}>{data}</Text>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            position: "relative",
            bottom: 35,
          }}
        >
          <TouchableOpacity
            style={[styles.button, styles.firstButton]}
            title="Self-cleaning"
            onPress={lightUpdateThingSpeak}
          >
            <Text style={styles.buttonText}>Self-cleaning</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            title="FindBottle"
            onPress={buzzerUpdateThingSpeak}
          >
            <Text style={styles.buttonText}>Find My Bottle</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={styles.footer}>
        <TouchableOpacity
          style={[
            styles.footerButton,
            styles.firstMenu,
            { backgroundColor: "rgba(0,0,0,0.1)", borderRadius: 15 },
          ]}
          title="Home"
        >
          <View style={styles.iconContainer}>
            <Image style={styles.icon} source={require("./home-click.png")} />
            <Text style={[styles.iconText, { fontWeight: "bold" }]}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.footerButton, styles.firstMenu]}
          title="Statistics"
          onPress={navigateToStatisticPage}
        >
          <View style={styles.iconContainer}>
            <Image style={styles.icon} source={require("./statistics.png")} />
            <Text style={styles.iconText}>Statistics</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerButton}
          title="Profile"
          onPress={navigateToStatisticPage}
        >
          <View style={styles.iconContainer}>
            <Image style={styles.icon} source={require("./profile.png")} />
            <Text style={styles.iconText}>Profile</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
temp = 100;
const lightUpdateThingSpeak = () => {
  const url =
    `https://api.thingspeak.com/update?api_key=OJIMVVEWZSOFHMWG&field2=` + temp;
  temp = temp + 1;
  axios
    .post(url)
    .then((response) => {
      console.log(temp - 1);
      console.log("ThingSpeak update successful");
    })
    .catch((error) => {
      console.log("ThingSpeak update failed: ", error);
    });
};

temp2 = 100;
const buzzerUpdateThingSpeak = () => {
  const url =
    `https://api.thingspeak.com/update?api_key=OJIMVVEWZSOFHMWG&field3=` +
    temp2;
  temp2 = temp2 + 1;
  axios
    .post(url)
    .then((response) => {
      console.log(temp2 - 1);
      console.log("ThingSpeak update successful");
    })
    .catch((error) => {
      console.log("ThingSpeak update failed: ", error);
    });
};

function testClick() {
  console.log("press");
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
    backgroundColor: "#2B2B2B",
    alignItems: "center",
    justifyContent: "center",
  },
  waterLevelText: {
    fontSize: 70,
    fontWeight: "bold",
    color: "red",
    // position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  welcome: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
    position: "relative",
    bottom: 50,
  },
  numbers: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    marginBottom: 2,
  },
  explan: {
    fontSize: 25,
    color: "yellow",
    fontWeight: "bold",
  },
  totalVolume: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  verticleLine: {
    height: "80%",
    width: 1,
    backgroundColor: "white",
  },
  container1: {
    width: 380,
    height: 100,
    borderRadius: "20",
    backgroundColor: "rgba(0,0,0,0)",
    alignItems: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20,
    position: "relative",
    bottom: 40,
  },
  container2: {
    width: 380,
    padding: 50,
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: "20",
    marginBottom: 20,
  },
  container3: {
    width: 380,
    height: 100,
    padding: 0,
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: "20",
  },
  button: {
    backgroundColor: "#3273c1",
    height: 80,
    width: 150,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    margin: 4,
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
    width: "90%",
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
  },
});

export default MainPage;
