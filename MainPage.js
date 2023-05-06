import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";
import ProgressCircle from 'react-native-progress-circle'
import { useNavigation } from "@react-navigation/native";
//   import Volume from "./Volume";
//   import { render } from "react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod";

const THINGSPEAK_API_KEY = "IYKOBVGP6C4LAHU3";
const CHANNEL_ID = "2075755";
const FIELD_ID = "2";

function MainPage() {
  const [waterLevel, setWaterLevel] = useState(50); // Set initial water level

  // const [value, setValue] = useState(50);

  // const circleColor = value > 50 ? "#8ed1fc" : "#fc8e8e";
  const navigation = useNavigation();

  const navigateToStatisticPage = () => {
    navigation.navigate("Statistic");
  };

  return (
    <View style={styles.container}>

      <Text style={styles.numbers}>Win's Bottle</Text>
      <View></View>
      <View>
        <View style={{ margin: 30 }}>
        <ProgressCircle
            percent={20}
            radius={150}
            borderWidth={20}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
        >
        <Text style={{ fontSize: 18 }}>{waterLevel+' / 750 mL'}</Text>
        </ProgressCircle>
          
        </View>
      </View>
      {/* {data.map((feed) => (
          <Text style={styles.hidden} key={feed.entry_id}>
            {feed.field1}
          </Text>
        ))} */}

      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity
          style={styles.button}
          title="Self-cleaning"
          onPress={updateThingSpeak}
        >
          <Text style={styles.buttonText}>Self-cleaning</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          title="FindBottle"
          onPress={testClick}
        >
          <Text style={styles.buttonText}>Find My Bottle</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          title="Statistics"
          onPress={navigateToStatisticPage}
        >
          <Text style={styles.buttonText}>Statistics</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
temp = 100;
const updateThingSpeak = () => {
  const url =
    `https://api.thingspeak.com/update?api_key=IYKOBVGP6C4LAHU3&field2=` + temp;
  temp = temp + 1;
  axios
    .post(url)
    .then((response) => {
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
  numbers: {
    fontSize: 30,
    color: "white",
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
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  suffix: {
    color: "black",
  },
  container1: {
    width: 380,
    height: 100,
    borderRadius: "20",
    backgroundColor: "white",
    alignItems: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20,
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
    backgroundColor: "#488BF8",
    width: 200,
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
});

export default MainPage;
