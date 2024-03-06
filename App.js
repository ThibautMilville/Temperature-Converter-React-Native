import React, { useEffect } from "react";
import hotBackGround from "./assets/images/hot.png";
import coldBackGround from "./assets/images/cold.png";
import { View, ImageBackground } from "react-native";
import { styles } from "./assets/css/app.style";
import { DEFAULT_TEMPERATURE } from "./constants";
// Components
import { InputTemperature } from "./components/InputTemperature/InputTemperature";
import { TemperatureDisplay } from "./components/TemperatureDisplay/TemperatureDisplay";
import { ConversionButton } from "./components/ConversionButton/ConversionButton";
// Services
import { isIceTemperature } from "./services/temperature-service";

export default function App() {
  const [currentBackground, setCurrentBackground] = React.useState();
  const [temperatureCelsius, setTemperatureCelsius] = React.useState(DEFAULT_TEMPERATURE);
  const [temperatureFahrenheit, setTemperatureFahrenheit] = React.useState(DEFAULT_TEMPERATURE);

  useEffect(() => {
    const isCold = isIceTemperature("°C", temperatureCelsius);
    setCurrentBackground(isCold ? coldBackGround : hotBackGround);
  } , [temperatureCelsius]);

  return (
    <ImageBackground source={currentBackground} style={styles.imageBackground} resizeMode="cover">
      <View style={styles.container}>
        <View style={styles.workspace}>
          <TemperatureDisplay temperature={temperatureFahrenheit} />
          <InputTemperature setTemperature={setTemperatureCelsius} />
          <ConversionButton temperatureCelsius={temperatureCelsius} setTemperatureFahrenheit={setTemperatureFahrenheit} />
        </View>
      </View>
    </ImageBackground>
  );
}
