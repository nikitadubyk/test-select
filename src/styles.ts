import { normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Inter, sans-serif;
  }
`;

export { GlobalStyles };
