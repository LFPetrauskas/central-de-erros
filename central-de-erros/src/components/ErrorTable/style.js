import styled from "styled-components";

export const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0px;
  box-sizing: border-box;
  padding: 10vw;
  word-break: break-all;
  @media (min-width: 426px) {
    width: 95vw;
  }
  @media (max-width: 425px) {
    width: 95vw;
    span {
      display: none;
    }
  }
  .error,
  .warning,
  .debug {
    border: 1px solid black;
    box-sizing: border-box;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .error {
    background-color: #ff0000aa;
    box-sizing: border-box;
  }
  .warning {
    background-color: #ff9900aa;
    box-sizing: border-box;
  }
  .debug {
    background-color: #007700aa;
    box-sizing: border-box;
  }
  .detalhes {
    box-sizing: border-box;
    padding: 2vw;
  }
  .eventos {
    min-width: fit-content;
    word-break: keep-all;
    padding: 2vw;
  }
  tr {
    max-width: 98vw;
  }
  td {
    border: 0px;
  }
  thead {
    background-color: #cd683e;
    th,
    tr,
    .detalhes,
    .eventos,
    .level {
      height: 4vw;
    }
    .level{
      word-break: keep-all;
      padding: 2vw;
    }
    @media (max-width: 425px) {
      font-size: 0.8rem;
      .select {
        border-radius: 2vw 0vw 0vw 0vw;
      }

      .eventos {
        border-radius: 0vw 2vw 0vw 0vw;
      }
    }
  }
  tbody {
    .level {
      align-items: center;
      display: flex;
      font-weight: bold;
      @media (max-width: 425px) {
        height: 10vh;
        width: 100%;
        word-break: keep-all;
      }
    }
    padding: 1vw;
    tr {
      border: 0px;
      box-sizing: border-box;
      &:nth-child(even) {
        background-color: #061e2dee;
      }
      &:nth-child(odd) {
        background-color: #061e2d;
      }
    }
  }
`;

export const TableContainer = styled.div`
  @media (max-width: 425px) {
    display: flex;
    justify-content: center;
  }
  padding: 2vw;
`;
