import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { fetchCategories } from "../utils/Api";

export const FoodContext = createContext({});

export const FoodContextProvider = (props: PropsWithChildren) => {
  const prova = "prova";
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const response = await fetchCategories();
    setCategories(response);
  };
  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    // console.log(categories);
  }, [categories]);

  return (
    <FoodContext.Provider value={{ categories }}>
      {props.children}
    </FoodContext.Provider>
  );
};
export const useFoodContext = () => {
  return useContext(FoodContext);
};
