import React from "react";
import { Text, View, ImageBackground } from "react-native";
import { styles } from "./assets/css/app.style";
import {DEFAULT_TEMPERATURE, DEFAULT_UNIT, UNITS} from "./constants";
import hotBackGround from "./assets/images/hot.png";
// Components
import { InputTemperature } from "./components/InputTemperature/InputTemperature";
import { TemperatureDisplay } from "./components/TemperatureDisplay/TemperatureDisplay";

export default function App() {
  const [temperature, setTemperature] = React.useState(DEFAULT_TEMPERATURE);
  const [currentUnit, setCurrentUnit] = React.useState(DEFAULT_UNIT);

  return (
    <ImageBackground source={hotBackGround} style={styles.imageBackground} resizeMode="cover">
      <View style={styles.container}>
        <View style={styles.workspace}>
          <TemperatureDisplay temperature={temperature} unit={currentUnit} />
          <InputTemperature temperature={temperature} setTemperature={setTemperature} />
          <Text style={{ fontSize: 24, fontWeight: 600, color: 'black' }}>Bouton</Text>
        </View>
      </View>
    </ImageBackground>
  );
}