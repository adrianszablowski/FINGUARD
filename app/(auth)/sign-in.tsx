import ErrorText from "@/components/form/ErrorText";
import FormField from "@/components/form/FormField";
import SubmitButton from "@/components/form/SubmitButton";
import { useUserContext } from "@/context/userContext";
import { getCurrentUser, signInUser } from "@/lib/appwrite";
import { Link, Redirect, router } from "expo-router";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert, Image, Keyboard, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  const { loggedIn } = useUserContext();

  if (loggedIn) {
    return <Redirect href="/home" />;
  }

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: SignInCredentials) => {
    try {
      await signInUser(data);

      Alert.alert("Success", `You have logged in successfully!`);
      router.replace("/home");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    }
  };

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful]);

  return (
    <Pressable className="flex-1" onPress={Keyboard.dismiss}>
      <SafeAreaView className="justify-sart relative flex-1 items-center px-4 py-10">
        <Image
          source={require("@/assets/images/shield.webp")}
          className="mb-10 h-48 w-48"
        />
        <View className="flex w-full">
          <Controller
            name="email"
            control={control}
            rules={{ required: "Email is required." }}
            render={({ field: { onChange, onBlur, value } }) => (
              <FormField
                title="Email"
                handleChangeText={onChange}
                value={value}
                onBlur={onBlur}
                inputStyles="border-gray-300 mb-1"
              />
            )}
          />
          {errors.email && (
            <ErrorText textStyles="mb-2" message={errors.email.message} />
          )}
          <Controller
            name="password"
            control={control}
            rules={{ required: "Password is required." }}
            render={({ field: { onChange, onBlur, value } }) => (
              <FormField
                title="Password"
                handleChangeText={onChange}
                value={value}
                onBlur={onBlur}
                inputStyles="border-gray-300 mb-1"
              />
            )}
          />
          {errors.password && (
            <ErrorText textStyles="mb-2" message={errors.password.message} />
          )}
          <SubmitButton
            onPress={handleSubmit(onSubmit)}
            name="Sign In"
            disabled={isSubmitting}
            buttonStyles={isSubmitting ? "opacity-50" : "opacity-100"}
          />
        </View>
        <View className="mt-5 flex-row items-center space-x-1">
          <Text className="text-gray-600">Don't have an account yet?</Text>
          <Link href="/sign-up">Sign Up</Link>
        </View>
      </SafeAreaView>
    </Pressable>
  );
};

export default SignIn;
