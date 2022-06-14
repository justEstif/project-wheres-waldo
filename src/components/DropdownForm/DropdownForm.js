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
const LabelSty = styled.label`
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
        <p>
          <InputSty
            onChange={() => handleSubmit}
            type="radio"
            id="waldo"
            name="fav_language"
            value=""
          />
          <LabelSty onClick={() => handleSubmit()} htmlFor="waldo">
            Waldo
          </LabelSty>
        </p>
        <p>
          <InputSty type="radio" id="greece" name="fav_language" value="" />
          <LabelSty onClick={() => handleSubmit()} htmlFor="greece">
            Greece
          </LabelSty>
        </p>
        <p>
          <InputSty type="radio" id="algeria" name="fav_language" value="" />
          <LabelSty
            onClick={() => handleSubmit()}
            type="radio"
            htmlFor="algeria"
          >
            Algeria
          </LabelSty>
        </p>
      </FormDiv>
    </DropdownDiv>
  );
};

export default DropdownForm;
