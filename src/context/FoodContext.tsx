import {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
export const FoodContext = createContext({});

export const FoodContextProvider = (props: PropsWithChildren) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [meals, setMeals] = useState([]);
  
  return (
    <FoodContext.Provider
      value={{
        categories,
        setCategories,
        selectedCategory,
        setSelectedCategory,
        meals,
        setMeals,
      }}
    >
      {props.children}
    </FoodContext.Provider>
  );
};
export const useFoodContext = () => {
  return useContext(FoodContext);
};
