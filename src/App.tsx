import "./App.css";
import { FoodContextProvider } from "./context/FoodContext";
import { Categories } from "./pages/Categories/Categories";

function App() {
  return (
    <div>
      <FoodContextProvider>
        <Categories />
      </FoodContextProvider>
    </div>
  );
}

export default App;
