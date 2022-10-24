import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { SingleCategory } from "../../components/SingleCategory.tsx/SingleCategory";
import { useFoodContext } from "../../context/FoodContext";
import { fetchCategories } from "../../utils/Api";
import { StyledCategories } from "./Categories.styled";

export const Categories = () => {
  const { categories } = useFoodContext() as any;

  return (
    <StyledCategories>
      <Routes>
        {categories.map((cat: any, i: number) => {
          console.log(cat);
          return (
            <Route
              key={i}
              path={`${cat.strCategory}`}
              element={
                <SingleCategory
                  id={cat.idCategory}
                  name={cat.strCategory}
                  description={cat.strCategoryDescription}
                />
              }
            />
          );
        })}
      </Routes>
    </StyledCategories>
  );
};
