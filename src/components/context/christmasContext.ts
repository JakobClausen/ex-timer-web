import { createContext, Dispatch, SetStateAction } from "react";
type AppContextValue = {
  isChristmasMode: boolean;
  setChristmasMode: Dispatch<SetStateAction<boolean>>;
};
export const appCtxDefaultValue = {
  isChristmasMode: false,
  setChristmasMode: (isChristmasMode: SetStateAction<boolean>) =>
    isChristmasMode, // noop default callback
};

export const christmasContext = createContext<AppContextValue>(
  appCtxDefaultValue
);
