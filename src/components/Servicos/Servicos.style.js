import styled from "styled-components";

export const ServicesContainer = styled.div`
  padding-top: 5%;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 0 auto;
  width: 100%;
  h3 {
    font-family: "Poppins";
    font-weight: bold;
    color: black;
    font-size: 35px;
  }
`;

export const ServiceMosaic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6%;
`;

export const SideText = styled.p`
  position: absolute;
  transform: rotate(270deg);
  letter-spacing: 12px;
  color: #054cb4;
  left: -100px;
  bottom: -2470px;
  font-size: 17px;
  z-index: -3;
  font-weight: bold;
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 1025px) {
    bottom: -1700px;
    left: -130px;
    font-size: 14px;
  }
`;
