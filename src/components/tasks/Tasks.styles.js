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

// A Title component that'll render an <h1> tag with some styles
export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// A Button component that'll render a button tag with some styles
export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
