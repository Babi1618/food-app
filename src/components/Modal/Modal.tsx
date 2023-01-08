import { useEffect, useState } from "react";
import { fetchSigleMeal } from "../../utils/Api";
import { takeIngredients, takeMeasures } from "../../utils/utils";
import {
  StyledModal,
  StyledModalCloseIcon,
  StyledModalContent,
  StyledModalTitle,
} from "./Modal.styled";

export const Modal = ({ selectedData, setSelectedData }: any) => {
  const [otherData, setOtherData] = useState<any>(null);
  const getDataMeal = async () => {
    const response = await fetchSigleMeal(selectedData.idMeal);
    setOtherData(response);
  };

  useEffect(() => {
    getDataMeal();
  }, []);

  const closeModal = () => {
    setSelectedData(null);
    setOtherData(null);
  };

  return (
    <StyledModal>
      <StyledModalContent>
        <StyledModalCloseIcon onClick={() => closeModal()}>
          X
        </StyledModalCloseIcon>
        <StyledModalTitle>{selectedData.strMeal}</StyledModalTitle>
        {otherData && (
          <div>
            <h2>Area:{otherData.strArea}</h2>
            <div>Instructions: {otherData.strInstructions}</div>
            {takeMeasures(otherData, takeIngredients(otherData)).map(
              (el: any, i: number) => {
                return (
                  <div key={i}>
                    {el.strIngredient} <span>{el.strMeasure}</span>
                  </div>
                );
              }
            )}
          </div>
        )}
        <img src={selectedData.strMealThumb} />
      </StyledModalContent>
    </StyledModal>
  );
};
