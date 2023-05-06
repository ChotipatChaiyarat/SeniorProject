import { View, Text } from "react-native";

function Volume(props) {
  return (
    <View>
      <Text>Volume: {props.volume} / 750 Ml</Text>
    </View>
  );
}

export default Volume;
