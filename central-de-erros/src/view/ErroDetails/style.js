import styled from "styled-components";

export const DivCard = styled.div`
  align-self: center;
  background-color: #061e2d;
  border-radius: 3% 3% 0 0;
  display: flex;
  flex-direction: column;
  font-size: 0.75rem;
  color: #ffffff;
  font-family: "Roboto";
  padding: 10px;
  hr {
    width: 100%;
  }
  h1 {
    color: #cd683e;
  }
  width: 90%;
`;

export const AsideComponent = styled.aside`
  width: fit-content;
  word-break: break-all;
`;

export const Button = styled.button``;

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

export const Rodape = styled.footer`
  background-color: #3d464b;
  box-sizing: border-box;
  justify-content: center;
  border-radius: 0px 0px 9px 9px;
  color: #fff;
  font-family: "Roboto";
  width: inherit;
  display: flex;
  width: 96%;
  padding: 5px;
`;
