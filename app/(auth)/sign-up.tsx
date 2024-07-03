import React from "react";
import { Keyboard, Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
  return (
    <Pressable className="flex-1" onPress={Keyboard.dismiss}>
      <SafeAreaView>
        <Text>Register</Text>
      </SafeAreaView>
    </Pressable>
  );
};

export default SignUp;
