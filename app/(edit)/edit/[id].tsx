import CheckboxField from "@/components/form/CheckboxField";
import DatePicker from "@/components/form/DatePicker";
import ErrorText from "@/components/form/ErrorText";
import FormField from "@/components/form/FormField";
import SubmitButton from "@/components/form/SubmitButton";
import { RNPStyles } from "@/constants/RNPStyles";
import { usePaymentContext } from "@/context/paymentContext";
import { editPayment } from "@/lib/appwrite";
import { AntDesign } from "@expo/vector-icons";
import { toDate } from "date-fns";
import { useLocalSearchParams } from "expo-router";
import { toString } from "lodash";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Keyboard,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
} from "react-native";
import RNPickerSelect, { PickerStyle } from "react-native-picker-select";

const Edit = () => {
  const [showRecurringForm, setShowRecurringForm] = useState(false);
  const { id } = useLocalSearchParams();
  const { payment } = usePaymentContext();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    defaultValues: {
      name: payment?.name ?? "",
      amount: toString(payment?.amount) ?? "0",
      dueDate: toDate(payment?.dueDate ?? new Date()),
      recurring: payment?.recurring ?? false,
      recurrenceInterval: payment?.recurrenceInterval ?? "",
      recurrenceEndDate: toDate(payment?.recurrenceEndDate ?? new Date()),
    },
  });

  const onSubmit = async (data: CreatePayment) => {
    await editPayment(id as string, data);
  };

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful]);

  return (
    <Pressable className="flex-1" onPress={Keyboard.dismiss}>
      <SafeAreaView className="flex-1 bg-white">
        <ScrollView className="p-4">
          <Text className="pb-4 font-rbold text-2xl">Edit Payment</Text>
          <Controller
            control={control}
            name="name"
            rules={{
              required: "Name is required.",
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <FormField
                title="Name"
                handleChangeText={onChange}
                otherStyles="mb-3"
                onBlur={onBlur}
                value={value}
              />
            )}
          />
          {errors.name && (
            <ErrorText textStyles="mb-2" message={errors.name.message} />
          )}
          <Controller
            control={control}
            name="amount"
            rules={{
              required: "Amount is required.",
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <FormField
                title="Amount"
                handleChangeText={onChange}
                value={value}
                onBlur={onBlur}
                keyboardType="numeric"
                otherStyles="mb-3"
              />
            )}
          />
          {errors.amount && (
            <ErrorText textStyles="mb-2" message={errors.amount.message} />
          )}
          <Controller
            control={control}
            name="dueDate"
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <DatePicker
                title="Due Date"
                value={toDate(value) || new Date()}
                onChange={onChange}
              />
            )}
          />
          <Controller
            control={control}
            name="recurring"
            render={({ field: { onChange, value } }) => (
              <CheckboxField
                title="Is this a recurring payment?"
                label="Recurring"
                value={value}
                setIsChecked={onChange}
                setShowRecurringForm={setShowRecurringForm}
                containerStyles="my-5"
              />
            )}
          />
          {showRecurringForm && (
            <>
              <Controller
                control={control}
                name="recurrenceInterval"
                rules={{ required: showRecurringForm }}
                render={({ field: { onChange, value } }) => (
                  <RNPickerSelect
                    items={[
                      { label: "Monthly", value: "monthly" },
                      { label: "Quarterly", value: "quarterly" },
                      { label: "Annually", value: "annually" },
                    ]}
                    onValueChange={onChange}
                    style={RNPStyles as PickerStyle}
                    value={value}
                    Icon={() => <AntDesign name="down" size={20} />}
                  />
                )}
              />
              {errors.recurrenceInterval && (
                <ErrorText
                  textStyles="mb-2"
                  message="Recurrence interval is required."
                />
              )}
              <Controller
                control={control}
                name="recurrenceEndDate"
                render={({ field: { onChange, value } }) => (
                  <DatePicker
                    title="Recurrence End Date"
                    value={toDate(value) || new Date()}
                    onChange={onChange}
                    otherStyles="mt-3"
                  />
                )}
              />
            </>
          )}
          <SubmitButton
            name="Edit Payment"
            onPress={handleSubmit(onSubmit)}
            disabled={isSubmitting}
            buttonStyles={isSubmitting ? "opacity-50" : "opacity-100"}
          />
        </ScrollView>
      </SafeAreaView>
    </Pressable>
  );
};

export default Edit;
