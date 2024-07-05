import { View, Text } from "react-native";
import React, { createContext, ReactNode, useContext, useState } from "react";

type UserContext = {
  user: any;
  handleSetUser: (userData: any) => void;
};

export const UserContext = createContext<UserContext | null>(null);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null);

  const handleSetUser = (userData: any) => {
    setUser(userData);
  };

  return (
    <UserContext.Provider value={{ user, handleSetUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUserContext must be used within a UserContext");
  }

  return context;
};
