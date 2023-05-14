import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Image,
  ImageBackground,
  Button,
} from "react-native";
import { BarChart } from "react-native-chart-kit";
import StatisticBox from "./StatisticBox";
import { useNavigation } from "@react-navigation/native";

const backgroundImage = require("./lake.jpeg"); // replace with the path to your image

function Statistic() {
  const navigation = useNavigation();
  const navigateToMainPage = () => {
    navigation.navigate("MainPage", { firstName: "Win", goal: 3.25 });
  };
  const navigateToProfilePage = () => {
    navigation.navigate("Profile");
  };
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [300, 500, 400, 400, 600, 700, 800],
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: "#fff",
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `rgba(0,0, 200, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,

    strokeWidth: 1, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
    padding: 10,
    decimalPlaces: 0, // add this line to set the number of decimal places to show
  };

  function testClick() {
    console.log("press");
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <Text style={styles.welcome}>{"Statistics"}</Text>

        {/* <View style={{ padding: 10, margin: 10 }}> */}
        <View>
          <BarChart
            data={data}
            width={320} // from react-native
            height={250}
            yAxisLabel="mL"
            chartConfig={chartConfig}
            verticalLabelRotation={0}
            style={{
              borderRadius: 10,
              borderWidth: 5,
              borderColor: "#488BF8",
            }}
          />
        </View>
        <View style={{ flexDirection: "row", top: 10 }}>
          <StatisticBox name="Total Intake" value="485" />
          <View style={{ width: 15 }}></View>

          <StatisticBox name="Average Intake" value="500" />
        </View>
        <View style={{ flexDirection: "row" }}>
          <StatisticBox name="Improvement" value="17%" />
          <View style={{ width: 15 }}></View>

          <StatisticBox name="Cumulative Score" value="40" />
        </View>
        <View style={{ height: 50 }}></View>
      </ImageBackground>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.footerButton, styles.firstMenu]}
          title="Home"
          onPress={navigateToMainPage}
        >
          <View style={styles.iconContainer}>
            <Image style={styles.icon} source={require("./home.png")} />
            <Text style={styles.iconText}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.footerButton,
            styles.firstMenu,
            { backgroundColor: "rgba(0,0,0,0.1)", borderRadius: 15 },
          ]}
          title="Statistics"
        >
          <View style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require("./statistics-click.png")}
            />
            <Text style={[styles.iconText, { fontWeight: "bold" }]}>
              Statistics
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerButton}
          title="Profile"
          onPress={navigateToProfilePage}
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

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    zIndex: -99,
    resizeMode: "stretch", // or "stretch" to stretch the image
  },
  welcome: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
    position: "relative",
    bottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#2B2B2B",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  buttonContainer: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
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
    width: "95%",
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

export default Statistic;
