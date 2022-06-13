import styled from "styled-components";

const ImgDiv = styled.div`
  /*//! change both height and width when zooming in */
  /* min-height: 200%;
  min-width: 200%; */

  min-height: 2000px;
  min-width: 2000px;
  background-image: url(${(props) => props.imgSrc});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border: 2px red solid;

  display: block;
`;

const Image = ({ handleClick, imgSrc }) => {
  return <ImgDiv onClick={(e) => handleClick(e)} imgSrc={imgSrc}></ImgDiv>;
};

export default Image;
