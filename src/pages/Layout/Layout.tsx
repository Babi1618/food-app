import { LateralNavbar } from "../../components/LateraleNavbar/LateralNavbar";
import { Categories } from "../../components/Categories/Categories";
import { StyledLayout } from "./Layout.styled";

export const Layout = () => {
  return (
    <StyledLayout>
      <LateralNavbar />
      <Categories />
    </StyledLayout>
  );
};
