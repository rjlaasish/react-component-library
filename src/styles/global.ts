import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Roboto:wght@400;500&display=swap');
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Poppins','Roboto', sans-serif;
  }

  #root {
    margin: 0 auto;
  }

`;
