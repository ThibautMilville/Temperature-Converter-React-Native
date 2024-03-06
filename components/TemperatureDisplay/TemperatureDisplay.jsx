import React from "react";
import { View, Text } from "react-native";
import { UNITS, DEFAULT_TEMPERATURE } from "../../constants";

export function TemperatureDisplay({ temperature }) {
  return (
    <View>
			<Text>{temperature + ' ' + UNITS.farenheit}</Text>
    </View>
  );
}