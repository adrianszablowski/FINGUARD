import { getSpecificMonthPayments } from "@/lib/appwrite";
import useAppwrite from "@/hooks/useAppwrite";
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
    data.forEach((payment: Payment) =>
      setTotalDue((prev) =>
        payment.paid === false ? prev + payment.amount : prev,
      ),
    );
  }, [data]);

  return (
    <>
      <TouchableOpacity
        className="mb-2 flex-row items-center justify-between rounded-md border border-gray-100 p-5"
        onPress={() => {
          setIsOpen(!isOpen);
          refetch();
          setTotalDue(0);
        }}
      >
        <Text>{month.name}</Text>
        <Text>{totalDue.toFixed(2)} PLN</Text>
      </TouchableOpacity>
      {isOpen && (
        <FlatList
          data={data}
          ListHeaderComponent={<></>}
          renderItem={(payment) => <PaymentTile payment={payment.item} />}
          keyExtractor={(payment: Payment) => payment.$id}
          refreshing={isLoading || isOpen}
        />
      )}
    </>
  );
};

export default UpcomingPaymentsComponent;
