import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #dd9d3c;
  width: 100vw;
`;

export const LogoContainer = styled.div`
  img {
    padding: 10px 10px 10px 10px;
    height: 80px;
    width: 80px;
    @media (max-width: 425px) {
      height: 45px;
      width: 45px;
    }
  }
`;

export const DataUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 425px) {
    height: 8vw;
  }

  h4 {
    @media (min-width: 426px) {
      padding: 15px 0px 10px 0px;
      padding-left: 20px;
      font-size: 18px;
    }
    @media (max-width: 425px) {
      padding: 1vw 0vw 0vw 1vw;
      font-size: 0.9rem;
    }
  }
  .token {
    @media (max-width: 425px) {
      display: none;
    }
  }

  span {
    @media (max-width: 425px) {
      display: none;
    }
  }
  h5 {
    @media (min-width: 426px) {
      padding-left: 20px;
      font-size: 14px;
    }

    @media (max-width: 425px) {
      padding-left: 0.5vw;
      font-size: 0.8rem;
    }
  }
`;

export const ImgDataUserContainer = styled.div`
  display: flex;
`;

export const LinkContainer = styled.div`
  color: black;
`;
