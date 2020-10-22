import styled, { css } from "styled-components";

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${({ turn }) => (turn ? "flex-start" : "space-around")};
  padding-top: 10%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AboutText = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  width: 57%;
  ${({ turn }) =>
    turn &&
    css`
      order: 1;
      align-content: flex-end;
    `};

  h2 {
    font-size: 40px;
    color: #054cb4;
    font-family: "Poppins";
    width: 50%;
    align-self: flex-start;
    flex-grow: 0;
    order: 1;
    ${({ turn }) =>
      turn &&
      css`
        display: flex;
        flex-direction: column;
        align-self: flex-end;
        margin-right: 4%;
        text-align: right;
      `};
  }
  h2:after {
    content: "";
    display: block;
    width: 20%;
    padding-top: 20px;
    border-bottom: 1px solid black;
    transition: 0.5s;
    ${({ turn }) =>
      turn &&
      css`
        align-self: flex-end;
      `};
  }
  h2:hover:after {
    width: 80%;
  }
  p {
    text-align: justify;
    line-height: 40px;
    text-decoration: none;
    font-size: 18px;
    font-family: "Montserrat";
    align-self: flex-start;
    width: 60%;
    flex-grow: 0;
    order: 2;
    ${({ turn }) =>
      turn &&
      css`
        margin-right: 4%;
      `};
  }
  @media (max-width: 768px) {
    width: 100%;
    align-content: center;
    h2 {
      align-self: center;
      width: 70%;
      font-size: 27px;
    }
    p {
      text-align: left;
      align-self: center;
      width: 70%;
      margin: 5%;
    }
  }
  @media (max-width: 1024px) {
    h2 {
      font-size: 25px;
    }
    p {
      line-height: 25px;
    }
  }
`;

export const AboutImg = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: -1;
`;

export const AboutImgWrapper = styled.div`
  object-fit: contain;
  position: relative;
  width: auto;
  height: 100%;
  margin-bottom: 50px;
  ${({ turn }) =>
    turn &&
    css`
      margin-left: 0;
      order: 2;
    `};
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 1024px) {
    width: 30vw;
  }
`;
