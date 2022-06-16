import styled from "styled-components";

const SImageDiv = styled.div`
  min-height: 3000px;
  min-width: 3000px;
  background-image: url(${(props) => props.imgSrc});
  background-size: cover;
  background-repeat: no-repeat;
  display: block;
`;

export { SImageDiv };

// const S-Image
