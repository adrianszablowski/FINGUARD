import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
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

  return (
    <SafeAreaView className="flex-1 bg-white p-4 pb-0">
      <ScrollView>
        <TextInput
          className="border border-red-400"
          onChangeText={(e) => console.log(e)}
        ></TextInput>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Edit;
