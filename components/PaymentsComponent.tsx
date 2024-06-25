import { months } from "@/constants/months";
import { AntDesign } from "@expo/vector-icons";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Text, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";

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
          Total Due:{" "}
          <Text className="font-rbold">{totalDue.toFixed(2)} PLN</Text>
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
            style={{
              inputIOS: {
                borderWidth: 1,
                borderColor: "#f3f4f6",
                paddingVertical: 10,
                paddingHorizontal: 5,
                width: 100,
                paddingRight: 30,
                borderRadius: 5,
              },
              inputAndroid: {
                borderWidth: 1,
                borderColor: "#f3f4f6",
                paddingVertical: 10,
                paddingHorizontal: 5,
                width: 100,
                paddingRight: 30,
                borderRadius: 5,
              },
              iconContainer: {
                top: 10,
                right: 5,
              },
            }}
            placeholder={{}}
            Icon={() => <AntDesign name="down" size={18} />}
          />
        </View>
      </View>
    </>
  );
};

export default PaymentsComponent;
