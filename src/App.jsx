import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./components/routes/MyRoutes";
import ScrollToTop from "./components/utils/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <MyRoutes />
    </BrowserRouter>
  );
};

export default App;
