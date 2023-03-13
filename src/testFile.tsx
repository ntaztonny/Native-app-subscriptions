import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

const TestFile = () => {
  return (
    <SafeAreaView>
      <View>
        <Text className="text-green-200">
          Open up App.tsx to start working on your app!
        </Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
};

export default TestFile;
