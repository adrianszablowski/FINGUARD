import {
  View,
  Text,
  TextInput,
  KeyboardTypeOptions,
  TextInputFocusEventData,
  NativeSyntheticEvent,
} from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

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
          className="flex-1"
          onChangeText={handleChangeText}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          secureTextEntry={title === "Password" && !showPassword}
          keyboardType={keyboardType ?? "default"}
          onBlur={onBlur}
        ></TextInput>
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {!showPassword ? (
              <AntDesign name="down" size={18} />
            ) : (
              <AntDesign name="down" size={18} />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
