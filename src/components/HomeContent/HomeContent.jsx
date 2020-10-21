import React from "react";
import {
  HomeContentWrapper,
  MockContainer,
  TextContainer,
  Arrow,
  MockImage,
} from "./HomeContent.style";
import cellphone from "../../../public/images/Frame.png";
import arrow from "../../../public/images/seta.gif";

const HomeContent = () => {
  return (
    <HomeContentWrapper>
      <MockContainer>
        <MockImage src={cellphone} href="/#" alt="cellphone-mockup" />
      </MockContainer>
      <TextContainer>
        <h2>Não é sobre dinheiro, mas sim sobre sonhos!</h2>
        <p>#VemProAzul</p>
      </TextContainer>
      <a href="#quemsomos">
        <Arrow src={arrow} alt="Arrow pointing down" />
      </a>
    </HomeContentWrapper>
  );
};

export default HomeContent;
