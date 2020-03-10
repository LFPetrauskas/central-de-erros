import styled from "styled-components";

export const DivCard = styled.div`
  align-self: center;
  background-color: #061e2d;
  border-radius: 3%;
  display: flex;
  flex-direction: column;
  font-size: 0.75rem;
  color: #ffffff;
  font-family: "Roboto";
  padding: 10px;
  strong {
    color: #cd683e;
  }
  hr {
    width: 100%;
  }
  h2, h3{
    color: #dd9d3c;
  }
  width: 90%;
`;

export const AsideComponent = styled.aside`
  width: fit-content;
  word-break: break-all;
`;

export const MainComponent = styled.main`
  width: 100%;
  @media (min-width: 401) {
    width: 75%;
  }
  word-break: break-all;
`;

export const SectionErro = styled.section`
  display: flex;
  @media (max-width: 540px) {
    flex-direction: column;
  }
`;


export const Button = styled.button`
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