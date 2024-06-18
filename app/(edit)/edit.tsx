import FormField from "@/components/FormField";
import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

const Edit = () => {
  const [form, setForm] = useState({
    name: "",
    amount: "",
    dueDate: "",
    recurring: false,
    recurrenceInterval: "Monthly",
    recurrenceEndDate: "",
  });

  console.log(form);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="p-4 pb-0">
        <Text className="pb-4 font-rbold text-2xl">Add New Payment</Text>
        <FormField
          title="Name"
          handleChangeText={(e: string) => setForm({ ...form, name: e })}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Edit;
