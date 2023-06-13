import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::after,
 ::before {
  box-sizing: inherit;
}

body {
  background-color: rgb(229, 229, 250);
  font-family: 'Lato', sans-serif;
  word-break: break-word;
}
`;