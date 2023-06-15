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
  background-color: ${({ theme }) => theme.color.vistaBlue};
  font-family: 'Lato', sans-serif;
  word-break: break-word;
}
`;