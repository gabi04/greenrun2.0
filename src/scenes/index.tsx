import { useContext } from "react";
import Home from "./Home";
import History from "./History";
import { GreenRunContext } from "../contexts/GreenRunContext";
import { SCENES } from "../contexts/GreenRunContext";

const Scenes = (): JSX.Element => {
  const greenRunContext = useContext(GreenRunContext) as any;
  const { currentScene } = greenRunContext;
  switch (currentScene) {
    case SCENES.HOME:
      return <Home />;
    case SCENES.HISTORY:
      return <History />;
    default:
      return <></>;
  }
};

export default Scenes;
