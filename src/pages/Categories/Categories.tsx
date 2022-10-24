import { Route, Routes } from "react-router-dom";
import { SingleCategory } from "../../components/SingleCategory.tsx/SingleCategory";
import { useFoodContext } from "../../context/FoodContext";
import { Home } from "../Home/Home";
import { StyledCategories } from "./Categories.styled";

export const Categories = () => {
  const { categories } = useFoodContext() as any;

  return (
    <StyledCategories>
      <Routes>
        {categories.map((cat: any, i: number) => {
          <Route path={`/`} element={<Home />}></Route>;
          return (
            <Route
              key={i}
              path={`${cat.strCategory}`}
              element={
                <SingleCategory
                  idCategory={cat.idCategory}
                  strCategory={cat.strCategory}
                  strCategoryDescription={cat.strCategoryDescription}
                />
              }
            />
          );
        })}
      </Routes>
    </StyledCategories>
  );
};
