import FormField from "@/components/form/FormField";
import SubmitButton from "@/components/form/SubmitButton";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: { email: string; password: string }) => {};

  return (
    <SafeAreaView className="justify-sart flex-1 items-center px-4 py-10">
      <Image
        source={require("@/assets/images/shield.webp")}
        className="mb-10 h-48 w-48"
      />
      <View className="flex w-full">
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <FormField
              title="Email"
              handleChangeText={onChange}
              value={value}
              onBlur={onBlur}
              inputStyles="border-gray-300 mb-4"
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <FormField
              title="Password"
              handleChangeText={onChange}
              value={value}
              onBlur={onBlur}
              inputStyles="border-gray-300"
            />
          )}
        />
        <SubmitButton onPress={handleSubmit(onSubmit)} name="Sign In" />
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
