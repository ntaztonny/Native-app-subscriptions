import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import TestFile from "./src/testFile";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import DemoScreen from "./src/screens/DemoScreen";
import PaywallScreen from "./src/screens/PaywallScreen";

export type RootStackParamList = {
  Home: undefined;
  Paywall: undefined;
  Demo: undefined;
};

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Demo"
          component={DemoScreen}
        />
        <Stack.Screen
          options={{ headerShown: false, presentation: "modal" }}
          name="Paywall"
          component={PaywallScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
