import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Pressable,
  Button,
} from "react-native";
import { BarChart } from "react-native-chart-kit";
import StatisticBox from "./StatisticBox";

function Statistic() {
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
      <View style={{ padding: 10, margin: 10 }}>
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
      <View style={{ flexDirection: "row" }}>
        <StatisticBox name="Total Intake" value="485" />
        <StatisticBox name="Average Intake" value="500" />
      </View>
      <View style={{ flexDirection: "row" }}>
        <StatisticBox name="Improvement" value="17%" />
        <StatisticBox name="Cumulative score" value="40" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2B2B2B",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
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
});

export default Statistic;
