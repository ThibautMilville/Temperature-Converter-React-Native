import React from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./InputTemperature.style";
import { UNITS, DEFAULT_TEMPERATURE } from "../../constants";

export function InputTemperature({ setTemperature }) {

  const updateTemperature = (value) => {
    setTemperature(value);
  };

  return (
    <View style={styles.inputBox}>
      <TextInput keyboardType="numeric" defaultValue={DEFAULT_TEMPERATURE} maxLength={4} onChangeText={updateTemperature} style={{flex: 1}} />
			<Text>{UNITS.celcius}</Text>
    </View>
  );
}