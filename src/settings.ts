import { createContext, Dispatch, SetStateAction } from "react";
type AppContextValue = {
  isEasterEgg: boolean;
  setIsEasterEgg: Dispatch<SetStateAction<boolean>>;
};
export const appCtxDefaultValue = {
  isEasterEgg: false,
  setIsEasterEgg: (isEasterEgg: SetStateAction<boolean>) => isEasterEgg, // noop default callback
};

export const easterEggContext = createContext<AppContextValue>(
  appCtxDefaultValue
);
