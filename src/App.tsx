import { AppStyled } from "./AppStyles";
import Footer from "./Components/Footer";
import Scenes from "./scenes";
import GreenRunContextProvider from "./contexts/GreenRunContext";
import Login from "./scenes/Login";

//TODO eliminar bootstrap
//TODO mirar si eliminar moment

const App = (): JSX.Element => {
  let logged = false;

  return (
    <GreenRunContextProvider>
      <AppStyled>
        {logged ? (
          <div className="app__content">
            <div className="app__content__body">
              <Scenes />
            </div>

            <div className="app__content__footer">
              <Footer />
            </div>
          </div>
        ) : (
          <Login />
        )}
      </AppStyled>
    </GreenRunContextProvider>
  );
};

export default App;
