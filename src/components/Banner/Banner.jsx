import React from "react";
import mockMac from "../../../public/images/mockMacBook.png";
import mockIphone from "../../../public/images/mockIphone.png";

import {
  BannerContainer,
  MocksContainer,
  TextContainer,
  BotoesContainer,
  MockMacBook,
  MockIphone,
} from "./Banner.style";
import backgroundImg from "../../../public/images/vector4.png";

const Banner = () => {
  return (
    <BannerContainer img={backgroundImg}>
      <MocksContainer>
        <MockMacBook src={mockMac} alt="Planilhas" />
        <MockIphone src={mockIphone} calt="E-book" />
      </MocksContainer>
      <TextContainer>
        <h2>Material de apoio</h2>
        <p>
          Aqui, você encontrará materiais de estudo e acompanhamento financeiro, confeccionado pela
          nossa equipe. Tudo isso para te ajudar da melhor maneira possível!
        </p>
        <BotoesContainer>
          <button type="button">E-Book 1</button>
          <button type="button">Planiha Oficial</button>
        </BotoesContainer>
      </TextContainer>
    </BannerContainer>
  );
};
export default Banner;
