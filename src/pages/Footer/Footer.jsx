import React from "react";

import Logo from "../../../public/images/logo.png";
import FacebookIcon from "../../../public/images/icons/facebook.png";
import InstagramIcon from "../../../public/images/icons/instagram.png";
import LinkedinIcon from "../../../public/images/icons/linkedin.png";
import {
  FooterContainer,
  TopWrapper,
  LogosWrapper,
  ContatoContainer,
  DownWrapper,
  LogoFooter,
  LogoSocial,
} from "./Footer.style";

const Footer = () => {
  return (
    <FooterContainer>
      <TopWrapper id="footerContainer">
        <LogosWrapper>
          <a href="/#">
            <LogoFooter src={Logo} alt="logo" />
          </a>
          <div>
            <a href="/#">
              <LogoSocial src={FacebookIcon} alt="logo" />
            </a>
            <a
              href="https://www.linkedin.com/company/inpay-solu%C3%A7%C3%B5es-financeiras/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <LogoSocial src={LinkedinIcon} alt="logo" />
            </a>
            <a href="https://www.instagram.com/in.pay" rel="noopener noreferrer" target="_blank">
              <LogoSocial src={InstagramIcon} alt="logo" />
            </a>
          </div>
        </LogosWrapper>
        <ContatoContainer>
          <p>
            Avenida Barão Homem de Melo 4500 5° Andar, sala 511
            <br />
            Belo Horizonte - MG,
            <br />
            Brasil 30494-270
          </p>
        </ContatoContainer>
      </TopWrapper>
      <DownWrapper>
        <p>Copyright © 2020 - INPAY Soluções Financeiras - Todos os direitos reservados.</p>
      </DownWrapper>
    </FooterContainer>
  );
};

export default Footer;
