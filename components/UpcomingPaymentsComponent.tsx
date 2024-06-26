import { getSpecificMonthPayments } from "@/lib/appwrite";
import useAppwrite from "@/lib/useAppwrite";
import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import PaymentTile from "./PaymentTile";

const UpcomingPaymentsComponent = ({
  month,
  index,
}: {
  month: { id: number; name: string };
  index: number;
}) => {
  const [totalDue, setTotalDue] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading, refetch } = useAppwrite(() =>
    getSpecificMonthPayments(index + 2),
  );

  useEffect(() => {
    data.forEach((payment: Payment) => setTotalDue(totalDue + payment.amount));
  }, [data]);

  return (
    <>
      <TouchableOpacity
        className="mb-2 flex-row items-center justify-between rounded-md border border-gray-100 p-5"
        onPress={() => setIsOpen(!isOpen)}
      >
        <Text>{month.name}</Text>
        <Text>{totalDue} PLN</Text>
      </TouchableOpacity>
      {isOpen && (
        <FlatList
          data={data}
          ListHeaderComponent={<></>}
          renderItem={(payment) => <PaymentTile payment={payment.item} />}
          keyExtractor={(payment: Payment) => payment.$id}
          onRefresh={() => refetch()}
          refreshing={isLoading}
        />
      )}
    </>
  );
};

export default UpcomingPaymentsComponent;
