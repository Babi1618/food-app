import { useCallback, useEffect } from "react";
import { useFoodContext } from "../../context/FoodContext";
import { fetchCategories } from "../../utils/Api";
import { StyledLateralNavbar } from "./LateralNavbar.styled";

export const LateralNavbar = () => {
  const { categories, setCategories, setSelectedCategory } =
    useFoodContext() as any;

  const selectCategory = (cat: any) => {
    setSelectedCategory(cat);
  };
  const getCategories = useCallback(async () => {
    const response = await fetchCategories();
    setCategories(response);
  }, []);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return (
    <nav>
      {categories.map((cat: any, i: number) => {
        return (
          <StyledLateralNavbar key={i}>
            <div onClick={() => selectCategory(cat)}>{cat.strCategory}</div>
          </StyledLateralNavbar>
        );
      })}
    </nav>
  );
};
