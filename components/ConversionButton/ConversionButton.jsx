import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./ConversionButton.style";
// Services
import { convertTemperature } from "../../services/temperature-service";

export function ConversionButton({ temperatureCelsius, setTemperatureFahrenheit, setTemperatureCelsius }) {
  return (
    <View>
      <TouchableOpacity style={styles.converterButton} onPress={() => convertTemperature(temperatureCelsius, setTemperatureFahrenheit, setTemperatureCelsius)}>
        <Text style={{ color: "white" }}>Convertir en Farenheit</Text>
      </TouchableOpacity>
    </View>
  );
}
