import { View, Text } from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";

type Props = {
  label?: string;
  title?: string;
  color?: string;
  checkboxStyles?: string;
  value: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
};

const CheckboxField = ({
  label,
  title,
  color = "black",
  checkboxStyles,
  value,
  setIsChecked,
}: Props) => {
  return (
    <View className="space-y-1">
      <Text className="font-rmedium text-lg">{label}</Text>
      <View className="flex-row items-center gap-3">
        <Checkbox
          value={value}
          onValueChange={setIsChecked}
          color={value ? color : undefined}
          className={`rounded-md ${checkboxStyles}`}
        />
        <Text>{title}</Text>
      </View>
    </View>
  );
};

export default CheckboxField;
