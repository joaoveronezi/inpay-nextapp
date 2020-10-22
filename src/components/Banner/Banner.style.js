import styled from "styled-components";

export const BannerContainer = styled.div`
  background-image: url(${(props) => props.img});
  background-color: #ffffff;
  background-repeat: no-repeat;
  background-position: 0 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    background-color: #ffff;
    background-image: none;
    background-attachment: fixed;
    background-repeat: no-repeat;
  }
`;

export const MocksContainer = styled.div`
  width: 740px;
  height: 500px;
  position: relative;
  padding: 0 60px 0;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const MockIphone = styled.img`
  position: absolute;
  bottom: 0px;
  right: 50px;
  @media (max-width: 1024px) {
    .mockIphone {
      width: 12vw;
    }
  }
`;
export const MockMacBook = styled.img`
  @media (max-width: 1024px) {
    width: 45vw;
  }
`;

export const TextContainer = styled.div`
  margin-bottom: 70px;
  position: relative;
  h2 {
    font-family: "Poppins";
    margin: 30px auto;
    width: 60%;
    @media (max-width: 768px) {
      margin-top: 60px;
    }
  }
  p {
    text-align: left;
    line-height: 40px;
    text-decoration: none;
    font-size: 18px;
    font-family: "Montserrat";
    margin: 0 auto;
    width: 60%;
  }
`;

export const BotoesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    text-decoration: none;
    color: white;
  }
  button {
    display: block;
    background-color: #054cb4;
    width: 120px;
    border-radius: 15px;
    border: none;
    height: 35px;
    margin: 30px;
    color: white;
    font-family: "Montserrat";
    cursor: pointer;
    @media (max-width: 768px) {
      width: 120px;
      font-size: 15px;
      margin: 30px;
      padding: 0 0 0;
      color: white;
      display: block;
    }
    @media (max-width: 520px) {
      width: 90px;
      font-size: 14px;
    }
  }
  button:hover {
    background-color: black;
  }
`;
