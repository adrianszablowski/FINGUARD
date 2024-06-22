import CheckboxField from "@/components/form/CheckboxField";
import DatePicker from "@/components/form/DatePicker";
import FormField from "@/components/form/FormField";
import SubmitButton from "@/components/form/SubmitButton";
import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import RNPickerSelect from "react-native-picker-select";

const Edit = () => {
  const [showRecurringForm, setShowRecurringForm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    amount: 0,
    dueDate: new Date(),
    recurring: false,
    recurrenceInterval: "",
    recurrenceEndDate: "",
  });

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="p-4">
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
        <DatePicker
          title="Due Date"
          value={form.dueDate}
          onChange={(e, date) => setForm({ ...form, dueDate: date! })}
        />
        <CheckboxField
          title="Is this a recurring payment?"
          label="Recurring"
          value={form.recurring}
          setIsChecked={(e) => {
            setForm({ ...form, recurring: e as boolean });
            setShowRecurringForm(e);
          }}
          containerStyles="my-5"
        />
        {showRecurringForm && (
          <>
            <RNPickerSelect
              items={[
                { label: "Monthly", value: "monthly" },
                { label: "Quarterly", value: "quarterly" },
                { label: "Annually", value: "annually" },
              ]}
              onValueChange={(value) =>
                setForm({ ...form, recurrenceInterval: value })
              }
              style={{
                inputIOS: {
                  borderWidth: 1,
                  borderColor: "#f3f4f6",
                  paddingVertical: 10,
                  paddingHorizontal: 5,
                  width: "auto",
                  height: 50,
                  paddingRight: 30,
                  borderRadius: 5,
                },
                inputAndroid: {
                  borderWidth: 1,
                  borderColor: "#f3f4f6",
                  paddingVertical: 10,
                  paddingHorizontal: 5,
                  width: "auto",
                  height: 50,
                  paddingRight: 30,
                  borderRadius: 5,
                },
                iconContainer: {
                  top: 15,
                  right: 10,
                },
              }}
              value={form.recurrenceInterval}
              Icon={() => <AntDesign name="down" size={20} />}
            />
            <DatePicker
              title="Recurrence End Date"
              value={form.dueDate}
              onChange={(e, date) => setForm({ ...form, dueDate: date! })}
              otherStyles="mt-3"
            />
          </>
        )}
        <SubmitButton name="Edit Payment" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Edit;
