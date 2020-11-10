import { createContext, Dispatch, SetStateAction } from "react";
type AppContextValue = {
  isChristmasMode: boolean;
  setChristmasMode: Dispatch<SetStateAction<boolean>>;
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
};
export const appCtxDefaultValue = {
  isChristmasMode: false,
  setChristmasMode: (isChristmasMode: SetStateAction<boolean>) =>
    isChristmasMode,
  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn: SetStateAction<boolean>) => isLoggedIn,
};

export const globalContext = createContext<AppContextValue>(appCtxDefaultValue);
