import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import { format } from "date-fns";

const PaymentTile = ({ payment }: { payment: Payment }) => {
  const [paid, setPaid] = useState(false);

  return (
    <Link href="/edit" asChild>
      <TouchableOpacity className="mb-2 flex flex-row items-center justify-between rounded-md border border-gray-100 bg-white p-4">
        <View className="gap-1">
          <Text className="font-rbold">{payment.name}</Text>
          <Text>Due: {format(new Date(payment.dueDate), "dd.MM.yyyy")}</Text>
          {payment.recurring && (
            <Text>
              Recurring: {payment.recurrenceInterval} until{" "}
              {format(new Date(payment.recurrenceEndDate), "dd.MM.yyyy")}
            </Text>
          )}
        </View>
        <View className="items-end">
          <Text className="font-rbold">{payment.amount.toFixed(2)} PLN</Text>
          <TouchableOpacity className="p-2 pr-0" onPress={() => setPaid(!paid)}>
            <Text
              className={`${paid || payment.paid ? "text-green-500" : "text-red-500"}`}
            >
              {paid || payment.paid ? "Paid" : "Unpaid"}
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default PaymentTile;
