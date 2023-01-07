import { useCallback, useEffect, useState } from "react";
import { fetchSigleCategory } from "../../utils/Api";
import { InfoModal } from "../InfoModal/InfoModal";
import { StyledCategory } from "./SigleCategory.styled";

// interface ICategory {
//   idCategory?: number;
//   strCategory?: string;
//   strCategoryDescription?: string;
// }

export const SingleCategory = ({
  idCategory,
  strCategory,
  strCategoryDescription,
}: any) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // const fetchCategory = async () => {
  //   console.log(strCategory);
  //   const response = await fetch(
  //     `https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`
  //   ).then((response) => response.json());
  //   return response;
  // };

  const getCategory = async () => {
    const response = await fetchSigleCategory(strCategory);
    setSelectedCategory(response);
  };

  useEffect(() => {
    getCategory();
  }, [selectedCategory]);

  return <StyledCategory>{selectedCategory?.strCategory||null}</StyledCategory>;
};
