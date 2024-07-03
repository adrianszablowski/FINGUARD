import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  KeyboardTypeOptions,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {
  title: string;
  otherStyles?: string;
  handleChangeText: any;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  value: any;
  inputStyles?: string;
  defaultValue?: string;
  onBlur?: (e: any) => void;
};

const FormField = ({
  otherStyles,
  handleChangeText,
  title,
  placeholder,
  keyboardType,
  value,
  inputStyles,
  onBlur,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-3 ${otherStyles}`}>
      <Text className="font-rmedium text-lg">{title}</Text>
      <View
        className={`h-12 w-full flex-row items-center rounded-md border border-gray-100 px-2 ${inputStyles}`}
      >
        <TextInput
          className="h-full flex-1"
          onChangeText={handleChangeText}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          secureTextEntry={title === "Password" && !showPassword}
          keyboardType={keyboardType ?? "default"}
          onBlur={onBlur}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {!showPassword ? (
              <AntDesign name="eye" size={22} color="black" />
            ) : (
              <AntDesign name="eye" size={22} color="gray" />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
