import { Tabs } from "expo-router";
import React from "react";

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{ headerShown: false }} />
      <Tabs.Screen name="create" options={{ headerShown: false }} />
      <Tabs.Screen name="profile" options={{ headerShown: false }} />
    </Tabs>
  );
};

export default TabLayout;
