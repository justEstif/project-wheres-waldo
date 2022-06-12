import styled from "styled-components";

const AppDiv = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap");
  display: flex;
  flex-direction: column;
  font-family: "ubuntu mono", "Courier New", Courier, monospace;
  text-align: center;
`;

const ImgDiv = styled.div`
  flex: 50%;
`;
const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  display: block;
`;
const PosDiv = styled.div`
  flex: 20%;
  font-weight: bold;
  font-size: 25px;
`;

export { AppDiv, ImgDiv, Img, PosDiv };
