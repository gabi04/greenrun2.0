import { AppStyled } from "./AppStyles";
import GreenRunContextProvider from "./contexts/GreenRunContext";
import AppContent from "./AppContent";

const App = (): JSX.Element => {
  return (
    <GreenRunContextProvider>
      <AppStyled>
        <AppContent />
      </AppStyled>
    </GreenRunContextProvider>
  );
};

export default App;
