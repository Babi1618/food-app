import { Link, Route, Routes } from "react-router-dom";
import { useFoodContext } from "../../context/FoodContext";

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
