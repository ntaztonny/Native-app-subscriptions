import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

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
  return (
    <TouchableOpacity
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
