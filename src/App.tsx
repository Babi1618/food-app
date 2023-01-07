import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { FoodContextProvider } from "./context/FoodContext";
import { Layout } from "./pages/Layout/Layout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <FoodContextProvider>
          <Layout />
        </FoodContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
