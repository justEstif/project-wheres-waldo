import styled from "styled-components";

const SPointerDiv = styled.div.attrs(({ cursorPos }) => ({
  style: {
    left: cursorPos[0] + "px",
    top: cursorPos[1] + "px",
  },
}))`
  display: block;
  border-radius: 50%;
  background-color: black;
  width: 40px;
  height: 40px;

  position: absolute;
  z-index: 2;
  transform: translate3d(-50%, -50%, 0);
`;

export { SPointerDiv };
