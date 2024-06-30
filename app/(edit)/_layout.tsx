import { Stack } from "expo-router";
import React from "react";

const EditLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="edit/[id]" options={{ headerShown: false }} />
    </Stack>
  );
};

export default EditLayout;
