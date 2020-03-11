import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');


   @media(max-width: 400px) {

     body {
      /* background: #353940; */
      background-image: linear-gradient(to bottom right, #525557aa, #a7acaf);
       box-sizing: border-box;
       display: flex;
       height: 100vh;
       margin: 0px;
       padding: 0px;
       color: #fff;
       font-family: 'Roboto', sans-serif;
       text-rendering: optimizeLegibility !important;
       -webkit-font-smoothing: antialiased !important;
       width: 100%;
     }  
   }

   @media(min-width: 350px) {

     * {
       padding: 0;
       margin: 0;
       outline: 0;
       box-sizing: border-box;
    }
  
    body {
      background: #353940;
      color: #fff;
      font-family: 'Roboto', sans-serif;
      text-rendering: optimizeLegibility !important;
      -webkit-font-smoothing: antialiased !important;
    }
  
    html, body, #root {
      height: 100%;
    }
  
    input, button {
      font-family: 'Roboto', sans-serif;
    }
  
    button {
      cursor: pointer;
    }
   }

`;
