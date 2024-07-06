import { useUserContext } from "@/context/userContext";
import { Link, Redirect } from "expo-router";
import { Image, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { loggedIn } = useUserContext();

  if (loggedIn) {
    return <Redirect href="/home" />;
  }

  return (
    <SafeAreaView className="flex flex-1 items-start justify-start gap-5 px-5 py-6 font-rbold">
      <Text className="self-center font-rbold text-2xl">FINGUARD</Text>
      <Image
        source={require("../assets/images/shield.webp")}
        className="h-80 w-80 self-center"
      />
      <Text className="font-rbold text-3xl">Take Control of Your Expenses</Text>
      <Text className="text-gray-400">
        Our mobile cost-tracking app helps you stay on top of your spending.
        Easily log and categorize your expenses to gain valuable insights and
        reach your financial goals.
      </Text>
      <TouchableOpacity className="rounded-md bg-black px-5 py-2">
        <Link href="/sign-in" className="text-2xl text-white">
          Log In
        </Link>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
