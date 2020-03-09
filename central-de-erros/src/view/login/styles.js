import styled from 'styled-components';

/* Tag onde se concentram todos os outros elementos é a tag agrupadora e 
   principal */
export const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom right, #525557aa,#a7acaf); 
`;

/* Estiliza a Div do Logotipo */
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0;
  margin: 10px;
  outline: 0;
  box-sizing: border-box; 

  img {
    height: 70px;
    width: 70px;
  }
`;

/* Estiliza o Formulário de Login */
export const LoginForm = styled.form`
  border-style: solid;
  border-width: 0px;
  border-radius: 9px 9px 0px 0px;
  min-width: 350px;
  height: 350px;
  padding: 40px 10px 40px 10px;
  background-color: #061e2d;
  box-shadow: 0 2px 10px 0 rgba(0,0,0,0.2);

  h1 {
   color: #fff;
   font-size: 32px;
   padding: 0px 0px 10px 0px;
   text-align: center;
  }

  h5 {
    text-align: center;
    font-size: 20px;
    padding: 0px 0px 10px 0px;
  }

  strong {
    color: #cd683e;
  }
  
  hr {
    border-color: #a7acaf;
    margin: 0px 0px 15px 0px;
  }

  a {
    font-size: 12px;
    text-decoration: none;
    color: #ffffff;
    padding-top: 10px;
    transition: .3s ease-in;
    
    &:hover {
      color: #dd9d3c;
    }
  }

`;

/* Estiliza a Div do Logotipo */
export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 20px;

  div {
    border-radius: 4px 0px 0px 4px;
    padding: 11px 11px 11px 11px;
    background-color: #dd9d3c;
    border-style: none;
    width: 40px;
  }
  
  input {
    width: 100%;
    padding: 12px 10px 12px 10px;
    border-radius: 0px 4px 4px 0px;
    margin: 0;
    border-style: none;
  }
`;

export const FooterLogin = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  margin: 0px;
  padding: 15px 10px 0px 0px;
  background-color: #3d464b;
  min-width: 350px;
  height: 50px;
  border-radius: 0px 0px 9px 9px;
  
  a {
    text-decoration: none;
    color: #ffffff;
    padding: 0px 0px 0px 10px; 
    transition: .3s ease-in;
    
    &:hover {
      color: #dd9d3c;
    }
  }

   
`;

export const ButtonForm = styled.button`
  background-color: #cd683e;
  color: #ffffff;
  border-radius: 4px;
  border: 0;
  width: 100%;
  padding: 12px 12px 12px 12px;
  margin-bottom: 5px; 
  font-size: 20px;
  transition: background-color 0.20s ease; 
  font-weight: 700;
  
   &:hover {
    background-color: #c23439;
    color: #ffffff;
    }
`;
/*  */
/*  */

