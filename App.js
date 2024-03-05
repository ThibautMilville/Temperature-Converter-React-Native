import { Text, View, ImageBackground } from "react-native";
import { styles } from "./assets/css/app.style";
import hotBackGround from "./assets/images/hot.png";
// Components
import { InputTemperature } from "./components/InputTemperature/InputTemperature";

export default function App() {
  return (
    <ImageBackground source={hotBackGround} style={styles.imageBackground} resizeMode="cover">
      <View style={styles.container}>
        <View style={styles.workspace}>
          <Text style={{ fontSize: 24, fontWeight: 600, color: 'black' }}>Température</Text>
          <InputTemperature />
          <Text style={{ fontSize: 24, fontWeight: 600, color: 'black' }}>Bouton</Text>
        </View>
      </View>
    </ImageBackground>
  );
}