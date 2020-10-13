import styled from "styled-components";

export const Arrow = styled.img`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    width: 60px;
  }
`;

export const HomeContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding-top: 30%;
    a {
      bottom: 0;
      position: absolute;
    }
  }
`;

export const TextContainer = styled.div`
  flex-shrink: 3;
  flex: 40%;
  font-family: "Montserrat", Arial;
  font-size: 65px;
  color: white;
  text-align: right;
  padding-right: 3%;
  h6 {
    font-size: 30px;
    font-weight: lighter;
  }
  @media (max-width: 768px) {
    font-size: 35px;
  }
`;
export const MockContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-shrink: 3;
  flex: 60%;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MockImage = styled.img`
  width: 30vw;
  @media (max-width: 1024px) {
    margin-top: 25vh;
    width: 40vw;
  }
`;
