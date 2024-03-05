import React from "react";
import { View, Text } from "react-native";
import { styles } from "./TemperatureDisplay.style";

export function TemperatureDisplay({ temperature, unit }) {
  return (
    <View>
			<Text>{temperature + ' ' + unit}</Text>
    </View>
  );
}