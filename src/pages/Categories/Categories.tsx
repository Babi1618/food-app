import { useEffect, useState } from "react";
import { Modal } from "../../components/Modal/Modal";
import { useFoodContext } from "../../context/FoodContext";
import { fetchSigleCategory, fetchSigleMeal } from "../../utils/Api";

export const Categories = () => {
  const { selectedCategory, meals, setMeals } = useFoodContext() as any;
  const [isMealsLoading, setIsMealsLoading] = useState<boolean>(true);
  const [selectedMeal, setSelectedMeal] = useState<any>(null);

  const getCategory = async () => {
    const response = await fetchSigleCategory(selectedCategory.strCategory);
    setIsMealsLoading(false);
    setMeals(response.meals);
  };

  useEffect(() => {
    if (selectedCategory) {
      getCategory();
    }
  }, [selectedCategory]);

  return (
    <>
      {selectedCategory ? (
        <div>
          <h1>{selectedCategory.strCategory}</h1>
          <div>{selectedCategory.strCategoryDescription}</div>
          <h3>Menu':</h3>
          {isMealsLoading ? (
            <div>Loading...</div>
          ) : (
            <div>
              {meals.map((el: any, i: any) => {
                return (
                  <div
                    key={i}
                    onClick={() => {
                      setSelectedMeal(el);
                    }}
                  >
                    {el.strMeal}
                  </div>
                );
              })}
            </div>
          )}
          <div></div>
        </div>
      ) : (
        <div>NESSUNA CATEGORIA SELEZIONATA</div>
      )}
      {selectedMeal && (
        <Modal setSelectedData={setSelectedMeal} selectedData={selectedMeal} />
      )}
    </>
  );
};
