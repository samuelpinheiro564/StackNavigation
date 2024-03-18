import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles.js";

export default function Home() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Profile")}
        styles={styles.navButtonV}
      >
        <Text>Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Contact")}
        styles={styles.navButtonR}
      >
        <Text>Contato</Text>
      </TouchableOpacity>
    </View>
  );
}
