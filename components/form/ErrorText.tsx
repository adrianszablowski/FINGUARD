import React from "react";
import { Text } from "react-native";

const ErrorText = ({
  message,
  textStyles,
}: {
  message: string | undefined;
  textStyles?: string;
}) => {
  return (
    <Text className={`text-xs text-red-500 ${textStyles}`}>{message}</Text>
  );
};

export default ErrorText;
