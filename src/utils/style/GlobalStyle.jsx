import { createGlobalStyle } from 'styled-components';

const StyledGlobalStyle = createGlobalStyle`;
    * {
        font-family: 'Montserrat', sans-serif;
    }

    body {
        margin: 0;
        padding: 0;
      }
`;

function GlobalStyle() {
  return <StyledGlobalStyle />;
}

export default GlobalStyle;