import styled from "styled-components";

const ImgDiv = styled.div`
  /*//! change both height and width when zooming in */
  min-height: 200%;
  min-width: 200%;

  /* height: 20%;
  width: 20%; */
  background-image: url(${(props) => props.imgSrc});
  background-size: cover;
  background-repeat: no-repeat;
  border: 2px red solid;
`;

const Image = ({ handleClick, imgSrc }) => {
  return <ImgDiv onClick={(e) => handleClick(e)} imgSrc={imgSrc}></ImgDiv>;
};

export default Image;
