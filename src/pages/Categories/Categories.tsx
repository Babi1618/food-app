import { useEffect, useState } from "react";
import { StyledCategory } from "../../components/SingleCategory.tsx/SigleCategory.styled";
import { SingleCategory } from "../../components/SingleCategory.tsx/SingleCategory";
import { fetchCategories } from "../../utils/Api";
import { StyledCategories } from "./Categories.styled";

export const Categories = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const response = await fetchCategories();
    setCategories(response);
  };
  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    console.log(categories);
  }, [categories]);
  return (
    <StyledCategories>
        {
            categories.map((cat:any)=>{
                return <SingleCategory id={cat.idCategory} name={cat.strCategory} description={cat.strCategoryDescription}/>
            })
        }
    </StyledCategories>
  );
};
