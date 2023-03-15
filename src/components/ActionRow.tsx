import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { RootStackParamList } from "../../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

type props = {
  title: string;
  screen: any;
  color: string;
  requiresPro?: boolean;
  icon?: any;
  vertical?: boolean;
};

const ActionRow: React.FC<props> = ({
  title,
  screen,
  color,
  requiresPro,
  icon,
  vertical,
}) => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(screen)}
      className={`flex flex-1 flex-row justify-center items-center py-6 rounded-lg space-x-2 m-2 ${
        vertical ? "flex-col" : "flex-row"
      }`}
      style={{ backgroundColor: color }}
    >
      <Ionicons name={icon} size={30} color="white" />
      <Text className="text-white font-bold text-lg">{title}</Text>
    </TouchableOpacity>
  );
};

export default ActionRow;
