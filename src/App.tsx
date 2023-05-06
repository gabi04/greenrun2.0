import { AppStyled } from "./AppStyles";
import LeftArrow from "./svgs/LeftArrow";
import Footer from "./Components/Footer";
import Scenes from "./scenes";
import GreenRunContextProvider from "./contexts/GreenRunContext";

const App = (): JSX.Element => {
  return (
    <GreenRunContextProvider>
      <AppStyled>
        <div className="app__content">
          <div className="app__content__header">
            <LeftArrow />
          </div>

          <div className="app__content__body">
            <Scenes />
          </div>

          <div className="app__content__footer">
            <Footer />
          </div>
        </div>
      </AppStyled>
    </GreenRunContextProvider>
  );
};

export default App;
