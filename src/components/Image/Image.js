import { SImageDiv } from "./Image.styled";

const Image = ({ handleMouseOver, imgSrc }) => {
  return (
    <SImageDiv
      onMouseMove={(e) => handleMouseOver(e)}
      imgSrc={imgSrc}></SImageDiv>
  );
};

export default Image;
