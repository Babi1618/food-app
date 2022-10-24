import { useEffect, useState } from "react";
import { InfoModal } from "../InfoModal/InfoModal";
import { StyledCategory } from "./SigleCategory.styled";

interface ICategory {
  idCategory: number;
  strCategory: string;
  strCategoryDescription: string;
}

export const SingleCategory = (props: ICategory) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const fetchCategory = async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`
    ).then((response) => response.json());
    return response;
  };
  const getCategory = async () => {
    const response = await fetchCategory();
    setSelectedCategory(response);
  };

  useEffect(() => {
    getCategory();
  }, []);
  return (
    <StyledCategory>
      <div>
        <div>{props.idCategory} </div>
        {props.strCategory} <span>info </span>
      </div>
    </StyledCategory>
  );
};
