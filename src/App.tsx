import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { LateralNavbar } from "./components/LateraleNavbar/LateralNavbar";
import { FoodContextProvider } from "./context/FoodContext";
import { Categories } from "./pages/Categories/Categories";

function App() {
  return (
    <div>
      <BrowserRouter>
        <FoodContextProvider>
          <LateralNavbar></LateralNavbar>
          <Categories />
        </FoodContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
