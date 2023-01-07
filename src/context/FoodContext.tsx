import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { fetchCategories } from "../utils/Api";

export const FoodContext = createContext({});

export const FoodContextProvider = (props: PropsWithChildren) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [meals, setMeals] = useState([]);

  // const getCategories = useCallback(async () => {
  //   const response = await fetchCategories();
  //   setCategories(response);
  // }, []);

  // useEffect(() => {
  //   getCategories();
  // }, [getCategories]);

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
