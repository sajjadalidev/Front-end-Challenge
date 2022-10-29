import styled from "styled-components";
import { Container } from "../../styles/GlobalStyles";

// A TaskContainer component that'll render a div tag with some styles
export const TaskContainer = styled(Container)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  ${Container};
`;

// A Input component that'll render a Input tag with some styles
export const Input = styled.input.attrs({ type: "checkbox" })``;

// A Label component that'll render a Label with some styles
export const Label = styled.label`
  align-items: center;
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`;

// A TaskCoLabelText component that'll render a Label text with some styles
export const LabelText = styled.span`
  background-color: white;
  color: black;
  font-size: 1.25em;
  ${Input}:checked + && {
    color: red;
  }
`;
