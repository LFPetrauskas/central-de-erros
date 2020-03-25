import styled from "styled-components";

export const Table = styled.table`
  word-break: break-all;
  @media (max-width: 425px) {
      span {
          display: none;
      }
  }
  .error,
  .warning,
  .debug {
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: 1rem;
    min-height: 10vw;
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
