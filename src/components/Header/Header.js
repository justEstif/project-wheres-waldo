import styled from "styled-components";
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
const Header = () => {
  return (
    <HeaderDiv>
      <div>Header</div>
      <div>Timer</div>
    </HeaderDiv>
  );
};

export default Header;
