import React from "react";
import hotBackGround from "./assets/images/hot.png";
import { TouchableOpacity, Text, View, ImageBackground } from "react-native";
import { styles } from "./assets/css/app.style";
import { DEFAULT_TEMPERATURE, DEFAULT_UNIT } from "./constants";
// Components
import { InputTemperature } from "./components/InputTemperature/InputTemperature";
import { TemperatureDisplay } from "./components/TemperatureDisplay/TemperatureDisplay";
import { ConversionButton } from "./components/ConversionButton/ConversionButton";

export default function App() {
  const [temperatureCelsius, setTemperatureCelsius] = React.useState(DEFAULT_TEMPERATURE);
  const [temperatureFahrenheit, setTemperatureFahrenheit] = React.useState(DEFAULT_TEMPERATURE);

  return (
    <ImageBackground source={hotBackGround} style={styles.imageBackground} resizeMode="cover">
      <View style={styles.container}>
        <View style={styles.workspace}>
          <TemperatureDisplay temperature={temperatureFahrenheit} />
          <InputTemperature temperature={temperatureCelsius} setTemperature={setTemperatureCelsius} />
          <ConversionButton temperatureCelsius={temperatureCelsius} setTemperatureFahrenheit={setTemperatureFahrenheit} setTemperatureCelsius={setTemperatureCelsius} />
        </View>
      </View>
    </ImageBackground>
  );
}
