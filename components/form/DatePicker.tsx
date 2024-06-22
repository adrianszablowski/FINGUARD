import { View, Text } from "react-native";
import React from "react";
import RNDateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

type Props = {
  title?: string;
  otherStyles?: string;
  value: Date;
  onChange?: (event: DateTimePickerEvent, date?: Date | undefined) => void;
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
        display="compact"
        themeVariant="light"
        onChange={onChange}
        minimumDate={minimumDate}
      />
    </View>
  );
};

export default DatePicker;
