import { Link, Route, Routes } from "react-router-dom";
import { useFoodContext } from "../../context/FoodContext";
import { Home } from "../../pages/Home/Home";
import { Meal } from "../../pages/Meal/Meal";
import { SingleCategory } from "../SingleCategory.tsx/SingleCategory";

export const LateralNavbar = () => {
  const { categories } = useFoodContext() as any;
  return (
    <nav>
      {categories.map((cat: any, i: number) => {
        return (
          <div>
            <Link to={`/${cat.strCategory}`}>{cat.strCategory}</Link>
          </div>
        );
      })}
    </nav>
  );
};
