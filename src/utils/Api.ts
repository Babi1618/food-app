
export const fetchCategories = async () => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  ).then((response) => response.json());
  return response.categories;
};


export const fetchSigleCategory = async (strCategory:string) => {
  console.log(strCategory);
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`
  ).then((response) => response.json());
  return response;
};