import styled from "styled-components";

export const CardImage = styled.img`
  width: 90px;
  height: 90px;
  margin: 0 auto;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 15vw;
  margin: 40px;
  h3 {
    text-align: center;
    font-weight: bold;
    font-family: "Montserrat";
    margin-top: 40px;
    height: 30px;
  }
  @media (max-width: 1024px) {
    width: 200px;
  }
`;
