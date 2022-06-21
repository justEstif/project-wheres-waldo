import styled from "styled-components";

const SNavBarDiv = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 5%;
  background-color: black;
  color: wheat;
  font-size: 20px;
`;
const SNavBarUl = styled.ul`
  @import url("https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@400;700&display=swap");
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  justify-content: space-around;
`;

const SNavBarLi = styled.li`
  font-weight: 700;
  /* font-size: 30px; */
  list-style: none;

  > * {
    all: unset;
    cursor: pointer;
  }
`;
export { SNavBarDiv, SNavBarUl, SNavBarLi };
