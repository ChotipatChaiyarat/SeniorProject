import { View, Text, StyleSheet } from "react-native";

function StatisticBox(props) {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>{props.name}</Text>
        <Text></Text>
        <Text style={{ fontSize: 40 }}> {props.value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    width: 150,
    height: 150,
    borderRadius: 75,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    margin: 18,
    borderWidth: 5,
    borderColor: "#488BF8",
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
});
export default StatisticBox;
