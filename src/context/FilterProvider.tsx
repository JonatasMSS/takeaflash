"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

export const filterContext = createContext<{
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
}>({
  filter: "",
  setFilter: () => {},
});

export function FilterProvider({ children }: { children: ReactNode }) {
  const [filter, setFilter] = useState("");

  return (
    <filterContext.Provider value={{ filter, setFilter }}>
      {children}
    </filterContext.Provider>
  );
}
