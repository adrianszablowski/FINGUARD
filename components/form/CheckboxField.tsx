import Checkbox from "expo-checkbox";
import React, { useEffect } from "react";
import { Text, View } from "react-native";

type Props = {
  label?: string;
  title?: string;
  color?: string;
  checkboxStyles?: string;
  value: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
  setShowRecurringForm?: React.Dispatch<React.SetStateAction<boolean>>;
  containerStyles?: string;
};

const CheckboxField = ({
  label,
  title,
  color = "black",
  checkboxStyles,
  value,
  setIsChecked,
  containerStyles,
  setShowRecurringForm,
}: Props) => {
  useEffect(() => {
    if (setShowRecurringForm && value) {
      setShowRecurringForm(value);
    }
  }, []);

  return (
    <View className={`space-y-1 ${containerStyles}`}>
      <Text className="font-rmedium text-lg">{label}</Text>
      <View className="flex-row items-center gap-3">
        <Checkbox
          value={value}
          onValueChange={(value) => {
            if (setShowRecurringForm) {
              setShowRecurringForm(value);
            }
            setIsChecked(value);
          }}
          color={value ? color : undefined}
          className={`rounded-md ${checkboxStyles}`}
        />
        <Text>{title}</Text>
      </View>
    </View>
  );
};

export default CheckboxField;
