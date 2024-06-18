import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

type Props = {
  title: string;
  otherStyles?: string;
  handleChangeText: any;
  placeholder?: string;
};

const FormField = ({
  otherStyles,
  handleChangeText,
  title,
  placeholder,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="font-rmedium text-lg">{title}</Text>
      <View className="h-12 w-full flex-row items-center rounded-md border border-gray-100 px-2">
        <TextInput
          className="flex-1"
          onChangeText={handleChangeText}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          secureTextEntry={title === "Password" && !showPassword}
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
