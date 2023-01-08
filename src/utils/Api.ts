export const fetchCategories = async () => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  ).then((response) => response.json());
  return response.categories;
};

export const fetchSigleCategory = async (strCategory: string) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`
  ).then((response) => response.json());
  return response.meals;
};

export const fetchSigleMeal = async (id: string) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  ).then((response) => response.json());
  return response.meals[0];
};
