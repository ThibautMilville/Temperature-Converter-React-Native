import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { styles } from "./assets/css/app.style";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.workspace}>
        <View>
          <Text>Température</Text>
          <Text>Température</Text>
          <Text>Convertir en Farenheit</Text>
          </View>
      </View>
    </View>
  );
}
