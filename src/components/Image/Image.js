import styled from "styled-components";

const ImgDiv = styled.div`
  /*//! change both height and width when zooming in */
  min-height: 3000px;
  min-width: 3000px;
  background-image: url(${(props) => props.imgSrc});
  background-size: cover;
  background-repeat: no-repeat;
  display: block;
`;

const Image = ({ handleMouseOver, imgSrc }) => {
  return (
    <ImgDiv onMouseMove={(e) => handleMouseOver(e)} imgSrc={imgSrc}></ImgDiv>
  );
};

export default Image;
