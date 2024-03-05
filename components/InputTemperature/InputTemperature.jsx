import React from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./InputTemperature.style";

export function InputTemperature({ temperature, setTemperature }) {

  const updateTemperature = (value) => {
    setTemperature(value);
  };

  return (
    <View style={styles.inputBox}>
      <TextInput keyboardType="numeric" defaultValue={temperature} maxLength={4} onChangeText={updateTemperature} style={{flex: 1}} />
			<Text>°C</Text>
    </View>
  );
}