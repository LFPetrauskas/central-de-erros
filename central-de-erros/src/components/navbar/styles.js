import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #dd9d3c ;
`;

export const LogoContainer = styled.div`
  img {
    padding: 10px 10px 10px 10px;  
    height: 80px;
    width: 80px;
  }
`;

export const DataUserContainer = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    padding: 15px 0px 10px 0px;
    padding-left: 20px;
    font-size: 18px;
  }

  h5 {
    padding-left: 20px;
    font-size: 14px;
  }
`;

export const ImgDataUserContainer = styled.div`
 display: flex;
`;

export const LinkContainer = styled.div`
 color: black;
`;

