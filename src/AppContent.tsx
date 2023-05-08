import { useContext } from "react";
import { GreenRunContext } from "./contexts/GreenRunContext";
import Scenes from "./scenes";
import Footer from "./Components/Footer";
import Auth from "./scenes/Auth";

const AppContent = () => {
  const greenRunContext = useContext(GreenRunContext) as any;
  const { logged } = greenRunContext;

  return logged ? (
    <div className="app__content">
      <div className="app__content__body">
        <Scenes />
      </div>

      <div className="app__content__footer">
        <Footer />
      </div>
    </div>
  ) : (
    <Auth />
  );
};

export default AppContent;
