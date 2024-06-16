import { View, Text } from "react-native";
import React from "react";

const PaymentTile = () => {
  return (
    <View className="mb-2 flex flex-row items-center justify-between rounded-md border border-gray-100 bg-white p-4">
      <View className="gap-1">
        <Text className="font-rbold">Internet</Text>
        <Text>Due: 1.06.2024</Text>
        <Text>Recurring: monthly until 1.06.2025</Text>
      </View>
      <View className="items-end gap-1">
        <Text className="font-rbold">1200.00 PLN</Text>
        <Text className="text-red-500">Unpaid</Text>
      </View>
    </View>
  );
};

export default PaymentTile;
