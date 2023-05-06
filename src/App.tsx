import { AppStyled } from "./AppStyles";
import Footer from "./Components/Footer";
import Scenes from "./scenes";
import GreenRunContextProvider from "./contexts/GreenRunContext";

//TODO eliminar bootstrap
//TODO mirar si eliminar moment

const App = (): JSX.Element => {
  return (
    <GreenRunContextProvider>
      <AppStyled>
        <div className="app__content">
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
