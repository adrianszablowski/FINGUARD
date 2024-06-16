import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import PaymentTile from "./PaymentTile";

const UpcomingPaymentsComponent = ({
  month,
}: {
  month: { id: number; name: string };
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <TouchableOpacity
        className="mb-2 flex-row items-center justify-between rounded-md border border-gray-100 p-5"
        onPress={() => setIsOpen(!isOpen)}
      >
        <Text>{month.name}</Text>
        <Text>0.00 PLN</Text>
      </TouchableOpacity>
      {isOpen && (
        <FlatList data={[{}, {}, {}]} renderItem={() => <PaymentTile />} />
      )}
    </>
  );
};

export default UpcomingPaymentsComponent;
