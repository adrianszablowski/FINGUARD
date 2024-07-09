import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type Props = {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  iconSize?: number;
};

const CustomButtonProfile = ({ title, icon, iconSize = 22 }: Props) => {
  return (
    <TouchableOpacity className="flex-row items-center gap-2 border-b p-4">
      <Ionicons name={icon} size={iconSize} />
      <Text className="text-lg">{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButtonProfile;
