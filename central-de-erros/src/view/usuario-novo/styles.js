import styled from "styled-components";

export const Button = styled.button`
  border-radius: 0.4vh;
  background-color: #cd683e;
  &:hover {
    background-color: #c23439;
    color: #ffffff;
  }
  border: 0px;
  padding: 15px;
  font-size: 1.25rem;
  width: 100%;
  @media (max-width: 425px) {
    font-size: 1.2rem;
    margin: 2vw 0vw 5vw 0vw;
  }
  color: #ffffff;
`;

export const Input = styled.input`
  box-sizing: border-box;
  padding: 10px;
  margin: 1vw 0vw 1vw 0vw;
  width: 100%;
  border: 0px;
  border-radius: 0px 3px 3px 0px;
`;

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (min-width: 426px) {
    width: 100%;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #061e2d;
  strong {
    color: #dd9d3c;
  }
  hr {
    width: 100%;
    margin: 10px 0px 10px 0px;
  }
  max-width: 600px;
  border-radius: 2vw 2vw 0vw 0vw;
  @media (min-width: 426px) {
    padding: 2vw 5vw 2vw 5vw;
    justify-content: center;
    width: 50vw;
  }
  @media (max-width: 425px) {
    width: 90vw;
    padding: 2vw 0vw 0vw 0vw;
  }
`;

export const Section = styled.section`
  box-sizing: border-box;
  background-image: linear-gradient(to bottom right, #525557aa, #a7acaf);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  @media (min-width: 426px) {
    justify-content: flex-start;
    padding: 5vw;
    height: 100vh;
    width: 100%;
  }
  @media (max-width: 425px) {
    width: 100vw;
    padding: 5vw 0vw 0vw 0vw;
  }
`;

export const Footer = styled.footer`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  background-color: #061e2d;
  border-radius: 0vh 0vh 2vh 2vh;
  padding: 1vh 0vh 2vh 1vh;
  background-color: #3d464b;
  a {
    color: #ffffff;
    text-decoration: none;
    &:hover {
      color: #cd683e;
    }
  }
  width: 50vw;
  max-width: 600px;
  @media (max-width: 425px) {
    width: 90vw;
  }
`;

export const Icone = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  i {
    padding: 10px;
    border-radius: 3px 0px 0px 3px;
    background-color: #dd9d3c;
  }
`;
