import { FoodContextProvider } from "./context/FoodContext";
import { Layout } from "./pages/Layout/Layout";

function App() {
  return (
    <FoodContextProvider>
      <Layout />
    </FoodContextProvider>
  );
}

export default App;
