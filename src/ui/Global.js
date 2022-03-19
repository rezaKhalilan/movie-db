import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family:"Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
    "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    background: ${({ theme }) => theme.colors.blue};
}

img {
    width: 100%;

}
`;
export default GlobalStyles;
