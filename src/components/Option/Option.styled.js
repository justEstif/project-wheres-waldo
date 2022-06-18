import styled from "styled-components";

const SOptionButton = styled.button`
  font-family: "ubuntu mono", "Courier New", Courier, monospace;
  background-color: black;
  border: none;
  color: white;
  font-size: 16px;

  padding: 5px;
  text-align: center;
  height: 50px;

  &:hover {
    border-bottom: 1px solid red;
  }
`;

export { SOptionButton };
