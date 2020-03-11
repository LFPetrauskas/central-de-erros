import styled from "styled-components";

export const DivCard = styled.div`
  align-self: center;
  background-color: #061e2d;
  border-radius: 10px;
  width: 90%;
  padding: 15px;
  font-size: 1.1rem;
  @media (min-width: 426px) {
    padding: 20px;
    line-height: 1.5rem;
    h1 {
      font-size: 1.5rem;
      padding-bottom: 10px;
    }
  }
  @media (max-width: 425px) {
    padding: 10px;
    h1 {
      font-size: 1.1rem;
    }
    width: 96%;
    border-radius: 3% 3% 0px 0px;
    font-size: 0.75rem;
  }
  @media (max-width: 325px) {
    padding: 10px;
    width: 90%;
    border-radius: 3% 3% 0px 0px;
  }
  display: flex;
  color: #ffffff;
  flex-direction: column;
  font-family: "Roboto";
  /* line-height: 1rem; */
  strong {
    color: #cd683e;
  }
  hr {
    width: 100%;
  }

  h2,
  h3 {
    font-size: 0.9rem;
    color: #dd9d3c;
  }
`;

export const AsideComponent = styled.aside`
  width: fit-content;
  word-break: break-all;
  @media (min-width: 426px) {
    padding: 10px;
    width: 20%;
  }
`;

export const MainComponent = styled.main`
  width: 100%;
  @media (min-width: 426px) {
    padding: 10px;
    width: 75%;
  }
  word-break: break-all;
`;

export const SectionErro = styled.section`
  display: flex;
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  box-sizing: border-box;
  background-color: #cd683e;
  color: #ffffff;

  border: 0;
  padding: 12px 12px 12px 12px;
  margin-bottom: 5px;
  font-size: 20px;
  transition: background-color 0.2s ease;
  font-weight: 700;

  @media (max-width: 425px) {
    order: 1;
    border-radius: 0px 0px 10px 10px;
    width: 96%;
    padding: 10px;
  }
  @media (min-width: 426px) {
    border-radius: 4px;
    width: 15%;
    align-self: flex-start;
    margin-left: 5%;
  }
  &:hover {
    background-color: #c23439;
    color: #ffffff;
  }
`;

export const Level = styled.p`
  .error,
  .warning,
  .debug {
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: 1rem;
  }
  .error {
    background-color: #ff0000aa;
  }
  .warning {
    background-color: #ff9900aa;
  }
  .debug {
    background-color: #007700aa;
  }
`;
