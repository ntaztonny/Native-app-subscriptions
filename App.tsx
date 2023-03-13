import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import TestFile from "./src/testFile";

export default function App() {
  return (
    <SafeAreaView>
      <TestFile />
      <Text className="text-green-200"> This is a test Expo App!!</Text>
    </SafeAreaView>
  );
}
