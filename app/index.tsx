import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex flex-1 items-center justify-center font-rbold">
      <Text className="text-2xl">FINGUARD</Text>
      <Link href="/home" className="text-2xl">
        Go to home
      </Link>
    </View>
  );
}
