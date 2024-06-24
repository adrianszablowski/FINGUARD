import UpcomingPaymentsComponent from "@/components/CustomMonthButton";
import PaymentTile from "@/components/PaymentTile";
import PaymentsComponent from "@/components/PaymentsComponent";
import { getCurrentMonthPayments } from "@/lib/appwrite";
import { getThreeMothsFromNow } from "@/lib/three-months";
import useAppwrite from "@/lib/useAppwrite";
import React from "react";
import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const { data, isLoading, refetch } = useAppwrite(() =>
    getCurrentMonthPayments(),
  );
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
              data={data}
              renderItem={(payment) => <PaymentTile payment={payment.item} />}
              ListHeaderComponent={() => <PaymentsComponent payment={data} />}
              keyExtractor={(payment: Payment) => payment.$id}
            />
            <Text className="pb-4 font-rbold text-2xl">Upcoming Payments</Text>
          </>
        )}
        refreshing={isLoading}
        onRefresh={() => refetch()}
      />
    </SafeAreaView>
  );
};

export default Home;
