import styled from "styled-components";
import { Timer } from "../index";
const HeaderDiv = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 5%;
  background-color: black;
  color: wheat;

  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 50px;
`;
const Header = ({ countries }) => {
  return (
    <HeaderDiv>
      <div>Header</div>
      <Timer />
    </HeaderDiv>
  );
};

export default Header;
