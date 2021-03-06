import styled from "styled-components";

const SOptionsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: black;
  color: white;
  width: 150px;
  padding: 20px 40px;

  // stops the mouse drag (keep)
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

export { SOptionsDiv };
