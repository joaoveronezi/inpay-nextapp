import React from "react";
import { HomeContentWrapper, MockContainer, TextContainer, Arrow, MockImage} from "./HomeContent.style";
import cellphone from "../../../public/images/Frame.png";
import arrow from "../../../public/images/seta.gif";


const HomeContent = () => {
  return (
    <HomeContentWrapper>
      <MockContainer>
        <MockImage
          src={cellphone}
          href="/#"
          alt="cellphone-mockup"
        />
      </MockContainer>
      <TextContainer>
        <p>
          Não é sobre 
          <strong>dinheiro </strong>
          , mas sim sobre
          <strong>sonhos! </strong>
        </p>
        <h6>#VemProAzul</h6>
      </TextContainer>
      <a href="#quemsomos">
        <Arrow src={arrow} alt="Arrow pointing down" />
      </a>
    </HomeContentWrapper>
  );
};

export default HomeContent;
