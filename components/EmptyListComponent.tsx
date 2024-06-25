import { View, Text } from "react-native";
import React from "react";

const EmptyListComponent = ({ title }: { title: string }) => {
  return (
    <View className="items-center py-5">
      <Text className="font-rmedium">{title}</Text>
    </View>
  );
};

export default EmptyListComponent;
