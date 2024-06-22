import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";

const PaymentTile = () => {
  const [paid, setPaid] = useState(false);

  return (
    <Link href="/edit" asChild>
      <TouchableOpacity className="mb-2 flex flex-row items-center justify-between rounded-md border border-gray-100 bg-white p-4">
        <View className="gap-1">
          <Text className="font-rbold">Internet</Text>
          <Text>Due: 1.06.2024</Text>
          <Text>Recurring: monthly until 1.06.2025</Text>
        </View>
        <View className="items-end">
          <Text className="font-rbold">1200.00 PLN</Text>
          <TouchableOpacity className="p-2 pr-0" onPress={() => setPaid(!paid)}>
            <Text className={`${paid ? "text-green-500" : "text-red-500"}`}>
              {paid ? "Paid" : "Unpaid"}
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default PaymentTile;
