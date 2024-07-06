import { getCurrentUser } from "@/lib/appwrite";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type UserContext = {
  user: User | null;
  isLoading: boolean;
  loggedIn: boolean;
};

export const UserContext = createContext<UserContext | null>(null);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getCurrentUser();

        if (!user) {
          setLoggedIn(false);
          setUser(null);
        } else {
          setLoggedIn(true);
          setUser(user);
        }
      } catch (error: any) {
        throw new Error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, isLoading, loggedIn }}>
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
