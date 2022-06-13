import styled from "styled-components";

const ImgDiv = styled.div`
  background: url(${(props) => props.imgSrc}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  height: 100%;
  width: 100%;
  border: 5px solid red;
  box-sizing: border-box;
`;

const Image = ({ handleClick, imgSrc }) => {
  return <ImgDiv onClick={(e) => handleClick(e)} imgSrc={imgSrc}></ImgDiv>;
};

export default Image;
