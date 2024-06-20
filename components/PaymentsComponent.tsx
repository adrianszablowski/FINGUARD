import { months } from "@/constants/months";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";

const PaymentsComponent = () => {
  return (
    <>
      <Text className="pb-4 font-rbold text-2xl">
        Payments for {months[new Date().getMonth()].name}
      </Text>
      <View className="flex-row items-center justify-between pb-4">
        <Text>
          Total Due: <Text className="font-rbold">1325.00 PLN</Text>
        </Text>
        <View className="flex-row items-center">
          <Text className="pr-2">Filter: </Text>
          <RNPickerSelect
            items={[
              { label: "Paid", value: true },
              { label: "Unpaid", value: false },
            ]}
            onValueChange={(value, index) => console.log(index)}
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
            placeholder={{ label: "All" }}
            Icon={() => <AntDesign name="down" size={18} />}
          />
        </View>
      </View>
    </>
  );
};

export default PaymentsComponent;