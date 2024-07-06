import { months } from "@/constants/months";
import { RNPStyles } from "@/constants/RNPStyles";
import { AntDesign } from "@expo/vector-icons";
import React, { Dispatch, useEffect, useState } from "react";
import { Text, View } from "react-native";
import RNPickerSelect, { PickerStyle } from "react-native-picker-select";

const PaymentsComponent = ({
  payment,
  setPaid,
  paid,
}: {
  payment: Payment[];
  setPaid: Dispatch<React.SetStateAction<number>>;
  paid: number;
}) => {
  const [totalDue, setTotalDue] = useState(0);

  useEffect(() => {
    payment.forEach((payment) => setTotalDue((prev) => prev + payment.amount));
  }, [payment]);

  return (
    <>
      <Text className="pb-4 font-rbold text-2xl">
        Payments for {months[new Date().getMonth()].name}
      </Text>
      <View className="flex-row items-center justify-between pb-4">
        <Text>
          Total: <Text className="font-rbold">{totalDue.toFixed(2)} PLN</Text>
        </Text>
        <View className="flex-row items-center">
          <Text className="pr-2">Filter: </Text>
          <RNPickerSelect
            items={[
              { label: "Paid", value: true, key: 0 },
              { label: "Unpaid", value: false, key: 1 },
            ]}
            itemKey={paid}
            onValueChange={(value, index) => setPaid(index)}
            style={RNPStyles as PickerStyle}
            placeholder={{}}
            Icon={() => <AntDesign name="down" size={18} />}
          />
        </View>
      </View>
    </>
  );
};

export default PaymentsComponent;
