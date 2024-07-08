import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const RecentTransation = () => {
  return (
    <View className="mb-4 flex-row items-center justify-between rounded-md border border-gray-200 p-5">
      <View className="flex-row items-center gap-4">
        <Ionicons name="bag-outline" size={24} color="gray" />
        <View className="space-y-1">
          <Text className="text-lg font-medium">Groceries</Text>
          <Text className="text-gray-400">Oct 15, 2023</Text>
        </View>
      </View>
      <Text className="text-lg font-medium">57.23 PLN</Text>
    </View>
  );
};

export default RecentTransation;
