import { logOut } from "@/lib/appwrite";
import { router } from "expo-router";
import React from "react";
import { Alert, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <SafeAreaView>
      <Text>Profile</Text>
      <TouchableOpacity
        onPress={async () => {
          try {
            await logOut();

            Alert.alert("Success", "You've been logged out");
            router.replace("/sign-in");
          } catch (error: any) {
            Alert.alert("Error", error.message);
          }
        }}
      >
        <Text>Log out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Profile;
