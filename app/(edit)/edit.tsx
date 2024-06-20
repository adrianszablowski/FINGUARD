import CheckboxField from "@/components/form/CheckboxField";
import FormField from "@/components/form/FormField";
import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";

const Edit = () => {
  const [form, setForm] = useState({
    name: "",
    amount: 0,
    dueDate: "",
    recurring: false,
    recurrenceInterval: "Monthly",
    recurrenceEndDate: "",
  });

  console.log(form);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="p-4 pb-0">
        <Text className="pb-4 font-rbold text-2xl">Edit Payment</Text>
        <FormField
          title="Name"
          handleChangeText={(e: string) => setForm({ ...form, name: e })}
          otherStyles="mb-3"
          value={form.name}
        />
        <FormField
          title="Amount"
          handleChangeText={(e: string) => setForm({ ...form, amount: +e })}
          value={form.amount}
          keyboardType="numeric"
          otherStyles="mb-3"
        />
        <FormField
          title="Due Date"
          handleChangeText={(e: string) => setForm({ ...form, name: e })}
          value={form.dueDate}
          otherStyles="mb-3"
        />
        <CheckboxField
          title="Is this a recurring payment?"
          label="Recurring"
          value={form.recurring}
          setIsChecked={(e) => {
            setForm({ ...form, recurring: e as boolean });
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Edit;
