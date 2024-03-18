import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // ambos sao regra para que funcione, inclusive
//o arquivo app.jsx vai se o ponto que liga e cria a navegação

import { StatusBar } from "expo-status-bar";
import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import Contact from "./src/screens/Contact";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Tela Inicial",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }}
        />

        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
