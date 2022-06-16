import styled from "styled-components"

const SOptionsContainerDiv = styled.div.attrs(({ clicked, clickedPos }) => ({
  style: {
    display: (clicked ? "block" : "none"),
    left: clickedPos[0] + "px",
    top: clickedPos[1] + "px",
  },
}))`
  position: absolute;
  z-index: 2;
`;

export { SOptionsContainerDiv }
