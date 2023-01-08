import styled from "styled-components";


export const StyledModal = styled.div`
color:blue
display: none; 
position: fixed; 
z-index:2;
left: 0;
top: 0;
text-align: center;
font-size: large;
width: 100%;
height: 100%;
overflow: auto;
background-color: rgba(0,0,0,0.4);
`;
export const StyledModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
`;
export const StyledModalCloseIcon = styled.div`
color: #aaa;
font-size: 28px;
font-weight: bolder;
text-align:right;
&:hover,
&:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
`;
export const StyledModalTitle = styled.div`
  font-size: 25px;
  padding-bottom: 10px;
  border-bottom-style: solid;
  border-bottom-color: grey;
  text-transform: uppercase;
  font-weight: bold;
`;