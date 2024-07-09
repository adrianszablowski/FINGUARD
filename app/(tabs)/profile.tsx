import CustomButtonProfile from "@/components/profile/CustomButtonProfile";
import { logOut } from "@/lib/appwrite";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="h-16 w-screen flex-row items-center justify-between border-b border-b-gray-200 px-4">
        <View>
          <Text className="text-xl font-bold">John Doe</Text>
          <Text className="text-gray-400">Profile</Text>
        </View>
        <TouchableOpacity
          onPress={async () => {
            try {
              await logOut();
            } catch (error: any) {
              Alert.alert("Error", error.message);
            }
          }}
        >
          <Ionicons name="log-out-outline" size={30} color="red" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <CustomButtonProfile title="Account" icon="person" />
        <CustomButtonProfile title="Change password" icon="lock-closed" />
        <CustomButtonProfile title="Settings" icon="settings" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
