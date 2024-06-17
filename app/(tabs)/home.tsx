import UpcomingPaymentsComponent from "@/components/CustomMonthButton";
import PaymentTile from "@/components/PaymentTile";
import PaymentsComponent from "@/components/PaymentsComponent";
import { getThreeMothsFromNow } from "@/lib/three-months";
import React from "react";
import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const months = getThreeMothsFromNow();

  return (
    <SafeAreaView className="flex-1 bg-white p-4 pb-0">
      <FlatList
        data={months}
        renderItem={(month) => <UpcomingPaymentsComponent month={month.item} />}
        keyExtractor={(month) => month.id.toString()}
        ListHeaderComponent={() => (
          <>
            <FlatList
              data={[{}, {}, {}, {}]}
              renderItem={(payment) => <PaymentTile />}
              ListHeaderComponent={() => <PaymentsComponent />}
              // keyExtractor={(payment) => payment.id}
            />
            <Text className="pb-4 font-rbold text-2xl">Upcoming Payments</Text>
          </>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
