import { View, Text } from "react-native";
import React from "react";

const PaymentTile = () => {
  return (
    <View className="flex flex-row items-center justify-between rounded-md bg-white p-4 shadow-md">
      <View className="gap-1">
        <Text className="font-rbold">Internet</Text>
        <Text>Due: 1.06.2024</Text>
        <Text>Recurring: monthly until 1.06.2025</Text>
      </View>
      <View className="gap-1">
        <Text className="font-rbold">$1200.00</Text>
        <Text className="text-red-500">Unpaid</Text>
      </View>
    </View>
  );
};

export default PaymentTile;
