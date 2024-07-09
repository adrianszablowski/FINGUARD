import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          tabBarInactiveTintColor: "#666",
          tabBarActiveTintColor: "#000",
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          headerShown: false,
          tabBarLabel: "Create",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="add-circle" color={color} />
          ),
          tabBarInactiveTintColor: "#666",
          tabBarActiveTintColor: "#000",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => <TabBarIcon name="person" color={color} />,
          tabBarInactiveTintColor: "#666",
          tabBarActiveTintColor: "#000",
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
