import React from "react";

import acomp from "../../../public/images/icons/acomp.png";
import amigo from "../../../public/images/icons/amigo.png";
import consul from "../../../public/images/icons/consul.png";
import invest from "../../../public/images/icons/invest.png";
import parceria from "../../../public/images/icons/parceria.png";
import plat from "../../../public/images/icons/plat.png";
import Card from "../Card";
import { ServicesContainer, SideText, TitleContainer, ServiceMosaic } from "./Servicos.style";

const Servicos = () => {
  return (
    <ServicesContainer>
      <SideText> - Serviços Oferecidos</SideText>

      <TitleContainer id="servicesContainer">
        <h3>Serviços</h3>
      </TitleContainer>
      <ServiceMosaic>
        <Card
          image={acomp}
          title="Acompanhamento Online"
          alt="Acompanhamento Online"
          image2={plat}
          title2="Plataforma Fácil e Adaptável"
          alt2="Plataforma Fácil e Adaptável"
          image3={consul}
          title3="Consultoria Premium"
          alt3="Consultoria Premium"
        />
        <Card
          image={amigo}
          title="Consórcio Entre Amigos"
          alt="Consórcio Entre Amigos"
          image2={invest}
          title2="Investimento Facilitado"
          alt2="Investimento Facilitado"
          image3={parceria}
          title3="Parceria com Bancos e Corretoras"
          alt3="Parceria com Bancos e Corretoras"
        />
      </ServiceMosaic>
    </ServicesContainer>
  );
};

export default Servicos;
