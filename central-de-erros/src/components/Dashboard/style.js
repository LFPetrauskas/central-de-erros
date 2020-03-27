import styled from "styled-components";

export const Input = styled.input`
  box-sizing: border-box;
  padding: 1vw;
  min-width: 23vw;
  @media (max-width: 425px) {
    width: 80vw;
  }
`;

export const Select = styled.select`
  box-sizing: border-box;
  padding: 1vw;
  min-width: 20vw;
  @media (max-width: 425px) {
    width: 90vw;
  }
`;

export const SectionSelect = styled.section`
  box-sizing: border-box;
  padding: 2vw;
  width: 100vw;
  display: flex;
  line-height: 1vw;
  justify-content: space-around;
  @media (max-width: 425px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const DivButton = styled.div`
  display: flex;
  padding: 1vw;
  @media (max-width: 425px) {
    justify-content: space-around;
  }
`;

export const Button = styled.button`
  box-sizing: border-box;
  background-color: #cd683e;
  color: #ffffff;

  border: 0;
  padding: 12px 12px 12px 12px;
  font-size: 20px;
  transition: background-color 0.2s ease;
  font-weight: 700;

  @media (max-width: 425px) {
    border: 1px;
    border-radius: 10px 10px 10px 10px;
    width: 48vw;
    padding: 10px;
  }
  @media (min-width: 426px) {
    border-radius: 4px;
    width: 30%;
    align-self: flex-start;
    margin: 0vw 5vw 0vw 1vw;
  }
  &:hover {
    background-color: #c23439;
    color: #ffffff;
  }
`;

export const DivMostrarArquivados = styled.div`
  display: flex;
  padding: 2vw;
  @media (max-width: 425px) {
    justify-content: center;
  }
  label {
    margin-left: 1vw;
  }
`;

export const SubmitButton = styled.button`
  min-width: 4vw;
  @media (max-width: 425px) {
    width: 10vw;
    /* border: 0px; */
    /* outline: 0px; */
  }
`;
export const FormSearch = styled.form`
  display: flex;
`;
