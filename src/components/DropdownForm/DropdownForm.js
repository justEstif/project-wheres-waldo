import styled from "styled-components";

const DropdownDiv = styled.div.attrs((props) => ({
  style: {
    display: props.display,
    left: props.clickedPos[0] + "px",
    top: props.clickedPos[1] + "px",
  },
}))`
  position: absolute;
  z-index: 2;
`;

const FormDiv = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: black;
  color: white;
  /* width: 180px; */
  padding: 20px 40px;

  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

const InputSty = styled.input`
  opacity: 0;
`;
const ButtonSty = styled.button`
  &:hover {
    color: green;
  }
`;
const DropdownForm = ({ clickedPos, clicked, handleSubmit }) => {
  const display = clicked ? "block" : "none";
  return (
    <DropdownDiv display={display} clickedPos={clickedPos}>
      {/* //! change the form values*/}
      <FormDiv>
        <ButtonSty value={"south-korea"} onClick={(e) => handleSubmit(e)}>
          South Korea
        </ButtonSty>
        <ButtonSty value={"algeria"} onClick={(e) => handleSubmit(e)}>
          Algeria
        </ButtonSty>
        <ButtonSty value={"greece"} onClick={(e) => handleSubmit(e)}>
          Greece
        </ButtonSty>
      </FormDiv>
    </DropdownDiv>
  );
};

export default DropdownForm;

/**
 * 
 * 
        <p>
          <InputSty
            type="radio"
            id="south-korea"
            name="country"
            value="south-korea"
          />
          <LabelSty htmlFor="south-korea">South Korea</LabelSty>
        </p>
        <p>
          <InputSty type="radio" id="greece" name="country" value="greece" />
          <LabelSty htmlFor="greece">Greece</LabelSty>
        </p>
        <p>
          <InputSty type="radio" id="algeria" name="country" value="algeria" />
          <LabelSty htmlFor="algeria">Algeria</LabelSty>
        </p>
 */

