import React from "react";
import { Text, TouchableOpacity } from "react-native";

type Props = {
  name: string;
  buttonStyles?: string;
  textStyles?: string;
  onPress?: () => void;
  disabled?: boolean;
};

const SubmitButton = ({
  name,
  buttonStyles,
  textStyles,
  onPress,
  disabled,
}: Props) => {
  return (
    <TouchableOpacity
      className={`mt-5 items-center rounded-md bg-black py-3 ${buttonStyles}`}
      onPress={onPress}
      disabled={disabled}
    >
      <Text className={`font-rmedium text-xl text-white ${textStyles}`}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;
