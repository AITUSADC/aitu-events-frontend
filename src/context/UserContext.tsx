import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { User } from "../types";

interface UserContextValue {
  user: User | null;
  setUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextValue>({
  user: null,
  setUser: () => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUserState] = useState<User | null>(() => {
    const stored = localStorage.getItem("aitu_user");
    return stored ? (JSON.parse(stored) as User) : null;
  });

  const setUser = (u: User | null) => {
    setUserState(u);
    if (u) localStorage.setItem("aitu_user", JSON.stringify(u));
    else localStorage.removeItem("aitu_user");
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
