import PaymentTile from "@/components/PaymentTile";
import React from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView className="flex-1 bg-white p-4">
      <Text className="pb-4 font-rbold text-2xl">Payments for june</Text>
      <FlatList
        data={[{}, {}]}
        renderItem={(payment) => <PaymentTile />}
        // keyExtractor={(payment) => payment.id}
      />
    </SafeAreaView>
  );
};

export default Home;
