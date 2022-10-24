import { createContext, PropsWithChildren, useContext } from "react";

export const FoodContext = createContext({});

export const FoodContextProvider = (props: PropsWithChildren) => {
  const prova = "prova";

  return (
    <FoodContext.Provider value={{ prova }}>
      {props.children}
    </FoodContext.Provider>
  );
};
export const useFoodContext = () => {
  return useContext(FoodContext);
};
