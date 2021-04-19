import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ContainerCenter = styled.div`
  margin-top: 3rem;
  width: 50%;
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  @media all and (max-width: 800px) {
    width: 90%;
    margin-top: 1rem;
  }
  img {
    height: 20%;
    width: 30%;
    margin-bottom: 0.5rem;
  }
`;
export const ContainerUrls = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  h3 {
    font-family: Roboto;
    color: #70757a;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 0px;
  }
  a {
    color: #6b8067;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    margin-top: 0.5rem;
  }
`;

export const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
`;
export const ContainerInputButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & button {
    margin-top: 1rem;
  }
`;
