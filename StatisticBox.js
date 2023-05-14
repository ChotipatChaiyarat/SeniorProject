import { View, Text, StyleSheet } from "react-native";

function StatisticBox(props) {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>{props.name}</Text>
        <Text></Text>
        <Text style={{ fontSize: 30 }}> {props.value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    width: 120,
    height: 120,
    borderRadius: 75,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    margin: 15,
    borderWidth: 5,
    borderColor: "#488BF8",
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 12,
  },
});
export default StatisticBox;
