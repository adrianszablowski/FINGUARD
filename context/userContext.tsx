import React, { createContext, ReactNode, useContext, useState } from "react";

type UserContext = {
  user: User | null;
  handleSetUser: (userData: User) => void;
  isLoading: boolean;
  handleSetLoading: (status: boolean) => void;
};

export const UserContext = createContext<UserContext | null>(null);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSetUser = (userData: User) => {
    setUser(userData);
  };

  const handleSetLoading = (status: boolean) => {
    setIsLoading(status);
  };

  return (
    <UserContext.Provider
      value={{ user, handleSetUser, isLoading, handleSetLoading }}
    >
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
