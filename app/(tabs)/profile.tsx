import RecentTransactions from "@/components/profile/RecentTransactions";
import { logOut } from "@/lib/appwrite";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Alert, FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="mb-2 h-16 w-screen flex-row items-center justify-between border-b border-b-gray-200 px-4">
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
          <Ionicons name="log-out-outline" size={30} />
        </TouchableOpacity>
      </View>
      <View className="px-4">
        <FlatList
          data={[{}, {}, {}]}
          renderItem={(category) => <Text>hej</Text>}
          ListHeaderComponent={() => (
            <>
              <RecentTransactions />
              <Text className="pb-4 font-rbold text-2xl">
                Expense Categories
              </Text>
            </>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
