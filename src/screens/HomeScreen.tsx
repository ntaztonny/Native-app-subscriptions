import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import ActionRow from "../components/ActionRow";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Paywall"
>;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView className="flex-1 bg-gray-100 relative">
      <ScrollView>
        <TouchableOpacity
          onPress={() => navigation.navigate("Paywall")}
          className="absolute z-50 top-5 right-5 items-center"
        >
          <Ionicons name="person-circle" size={50} color="#E5962D" />
          <Text className="text-center text-[#E5962D]"> User name</Text>
        </TouchableOpacity>
        <Image
          source={{ uri: "https://i.imgur.com/e14NE49.png" }}
          className="w-full, h-64"
        />
        <View className="m-4">
          <View className="flex-row justify-between space-x-2">
            <ActionRow
              title="Track Workout"
              screen="Demo"
              color="#E5962D"
              requiresPro
              icon="fitness"
              vertical
            />
            <ActionRow
              title="Browse Workouts"
              screen="Demo"
              color="#1982c4"
              icon="library"
              vertical
            />
          </View>
          <ActionRow
            title="Connect with Friends"
            screen="Demo"
            color="#F44174"
            icon="share-social"
          />
          <ActionRow
            title="Add an exercise"
            screen="Demo"
            color="#8AC926"
            requiresPro
            icon="add-circle"
          />
          <ActionRow
            title="Create a Routine"
            screen="Demo"
            color="#C03221"
            requiresPro
            icon="md-time"
          />
          <ActionRow
            title="Join challenges"
            screen="Demo"
            color="#23967F"
            requiresPro
            icon="trophy"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
