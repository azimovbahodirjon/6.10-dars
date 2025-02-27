import { createContext } from "react";

export const GlobalContext = createContext();

export function GlobalcontextProvider({ children }) {
  return (
    <GlobalContext.Provider value={"Hello"}>{children}</GlobalContext.Provider>
  );
}
