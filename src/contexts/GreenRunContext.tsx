import { createContext, useState } from "react";

export const GreenRunContext = createContext({});

type Props = {
  children: JSX.Element;
};

export enum SCENES {
  HOME = "home",
  HISTORY = "history",
}

export default function GreenRunContextProvider({ children }: Props) {
  const [currentScene, setCurrentScene] = useState<string>(SCENES.HOME);

  return (
    <GreenRunContext.Provider value={{ currentScene, setCurrentScene }}>
      {children}
    </GreenRunContext.Provider>
  );
}
