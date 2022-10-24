import { InfoModal } from "../InfoModal/InfoModal";
import { StyledCategory } from "./SigleCategory.styled";

interface ICategory {
  id: number;
  name: string;
  description: string;
}

export const SingleCategory = (props: ICategory) => {
  return (
    <StyledCategory>
      <div>
        <div>{props.id} </div>
        {props.name} <span>info </span>
      </div>
    </StyledCategory>
  );
};
