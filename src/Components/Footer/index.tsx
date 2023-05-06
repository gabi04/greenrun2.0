import HomeSvg from "../../svgs/HomeSvg";
import HistorySvg from "../../svgs/HistorySvg";
import LogOut from "../../svgs/LogOut";
import { Footertyled } from "./FooterStyles";
import { useContext } from "react";
import { GreenRunContext } from "../../contexts/GreenRunContext";
import { SCENES } from "../../contexts/GreenRunContext";

const Footer = () => {
  const greenRunContext = useContext(GreenRunContext) as any;
  const { currentScene, setCurrentScene } = greenRunContext;
  return (
    <Footertyled>
      <button
        className={`footer__btn ${
          currentScene === SCENES.HOME ? `footer__btn--active` : null
        }`}
        onClick={() => setCurrentScene(SCENES.HOME)}
      >
        <HomeSvg />
      </button>
      <button
        className={`footer__btn ${
          currentScene === SCENES.HISTORY ? `footer__btn--active` : null
        }`}
        onClick={() => setCurrentScene(SCENES.HISTORY)}
      >
        <HistorySvg />
      </button>
      <LogOut />
    </Footertyled>
  );
};

export default Footer;
