import EmptyListComponent from "@/components/EmptyListComponent";
import PaymentTile from "@/components/PaymentTile";
import PaymentsComponent from "@/components/PaymentsComponent";
import UpcomingPaymentsComponent from "@/components/UpcomingPaymentsComponent";
import { getCurrentMonthPayments } from "@/lib/appwrite";
import { getThreeMothsFromNow } from "@/lib/three-months";
import useAppwrite from "@/lib/useAppwrite";
import React, { useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const [paid, setPaid] = useState(1);
  const { data, isLoading, refetch } = useAppwrite(() =>
    getCurrentMonthPayments(paid),
  );
  const months = getThreeMothsFromNow();

  useEffect(() => {
    refetch();
  }, [paid]);

  return (
    <SafeAreaView className="flex-1 bg-white p-4 pb-0">
      <FlatList
        data={months}
        renderItem={(month) => (
          <UpcomingPaymentsComponent month={month.item} index={month.index} />
        )}
        keyExtractor={(month) => month.id.toString()}
        ListHeaderComponent={() => (
          <>
            <FlatList
              data={data}
              renderItem={(payment) => <PaymentTile payment={payment.item} />}
              ListHeaderComponent={() => (
                <PaymentsComponent
                  payment={data}
                  setPaid={setPaid}
                  paid={paid}
                />
              )}
              keyExtractor={(payment: Payment) => payment.$id}
              ListEmptyComponent={
                <EmptyListComponent title="There are no payments here." />
              }
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
