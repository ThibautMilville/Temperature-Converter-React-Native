import React from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./InputTemperature.style";

export function InputTemperature({ defaultValue = "1234" }) {
  return (
    <View style={styles.inputBox}>
      <TextInput keyboardType="numeric" defaultValue={defaultValue} maxLength={4} style={{flex: 1}} />
			<Text>°C</Text>
    </View>
  );
}