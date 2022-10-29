import styled from "styled-components";
import { Container } from "../../styles/GlobalStyles";

// A TaskContainer component that'll render a div tag with some styles
export const TaskFormContainer = styled(Container)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  ${Container};
`;

// Create an Input component that'll render an <input> tag with some styles
export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  font-size: 1.5em;
  color: ${(props) => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

export const Form = styled.form`
  flex-direction: column;
`;
