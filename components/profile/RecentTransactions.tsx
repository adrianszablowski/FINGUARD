import React from "react";
import { FlatList, Text, View } from "react-native";
import RecentTransation from "./RecentTransation";

const RecentTransactions = () => {
  return (
    <View>
      <Text className="pb-4 font-rbold text-2xl">Recent Transactions</Text>
      <FlatList
        data={[{}, {}, {}]}
        renderItem={(category) => <RecentTransation />}
      />
    </View>
  );
};

export default RecentTransactions;
