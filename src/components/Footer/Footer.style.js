import styled from "styled-components";

export const TopWrapper = styled.div`
  background-color: #054cb4;
  display: flex;
  height: 400px;
  justify-content: space-around;
  @media (max-width: 520px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterContainer = styled.div`
  background-color: #054cb4;
`;
export const DownWrapper = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: center;
  color: white;
  background-color: #0345a6;
  @media (max-width: 520px) {
    text-align: center;
  }
`;

export const LogosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 10px;
  align-items: center;
`;
export const LogoFooter = styled.img`
  padding-bottom: 10%;
  width: 200px;
`;

export const LogoSocial = styled.img`
  width: 40px;
  margin: 10px;
`;

export const ContatoContainer = styled.div`
  width: 300px;
  display: flex;
  align-content: center;
  align-items: center;
  @media (max-width: 520px) {
    width: 270px;
  }
  p {
    line-height: 30px;
    font-size: 18px;
    text-align: end;
    font-family: "Montserrat";
    color: white;
    @media (max-width: 520px) {
      font-size: 15px;
      text-align: center;
    }
  }
`;
