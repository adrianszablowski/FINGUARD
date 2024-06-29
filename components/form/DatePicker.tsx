import { View, Text } from "react-native";
import React from "react";
import RNDateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

type Props = {
  title?: string;
  otherStyles?: string;
  value: Date;
  onChange?: any;
  minimumDate?: Date;
};

const DatePicker = ({
  value,
  onChange,
  otherStyles,
  title,
  minimumDate,
}: Props) => {
  return (
    <View className={`space-y-3 ${otherStyles}`}>
      <Text className="font-rmedium text-lg">{title}</Text>
      <RNDateTimePicker
        value={value}
        style={{
          alignSelf: "flex-start",
        }}
        display="default"
        mode="date"
        themeVariant="light"
        onChange={(event, selectedDate) => {
          onChange(selectedDate);
        }}
        minimumDate={minimumDate}
      />
    </View>
  );
};

export default DatePicker;
