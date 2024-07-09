import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type Props = {
  title: string;
  icon?: string;
};

const CustomButtonProfile = ({ title, icon }: Props) => {
  return (
    <TouchableOpacity className="border-b p-4">
      {/* <Ionicons name={icon} /> */}
      <Text className="text-lg font-medium">{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButtonProfile;
