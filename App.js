import { Text, View, ImageBackground } from "react-native";
import { styles } from "./assets/css/app.style";
import hotBackGround from "./assets/images/hot.png";

export default function App() {
  return (
    <ImageBackground source={hotBackGround} style={styles.imageBackground} resizeMode="cover">
      <View style={styles.container}>
        <View style={styles.workspace}>
          <Text style={{ fontSize: 24, fontWeight: 600, color: 'white' }}>Température</Text>
          <Text style={{ fontSize: 24, fontWeight: 600, color: 'white' }}>Température</Text>
          <Text style={{ fontSize: 24, fontWeight: 600, color: 'white' }}>Convertir en Farenheit</Text>
        </View>
      </View>
    </ImageBackground>
  );
}