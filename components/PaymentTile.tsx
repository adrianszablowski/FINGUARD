import { usePaymentContext } from "@/context/paymentContext";
import { setStatusOfPayment } from "@/lib/appwrite";
import { format } from "date-fns";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const PaymentTile = ({ payment }: { payment: Payment }) => {
  const [paid, setPaid] = useState(payment.paid);
  const { handleSetPayment } = usePaymentContext();

  const handlePaidStatus = (paidStatus: boolean) => {
    setStatusOfPayment(payment.$id, paidStatus);
  };

  useEffect(() => {
    setPaid(payment.paid);
  }, [payment]);

  const handleSetPaymentDataToContext = () => {
    handleSetPayment(payment);
  };

  return (
    <Link
      href={`/edit/${payment.$id}`}
      onPress={handleSetPaymentDataToContext}
      asChild
    >
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
          <TouchableOpacity
            className="p-2 pr-0"
            onPress={() => {
              setPaid(!paid);
              handlePaidStatus(!paid);
            }}
          >
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
