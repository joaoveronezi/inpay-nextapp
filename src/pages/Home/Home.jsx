import React from "react";
import HomeContent from "../../components/HomeContent";
import { HomeWrapper } from "./Home.style";
import backgroundImg from "../../../public/images/vector3.png";

const Home = () => {
  return (
    <HomeWrapper img={backgroundImg}>
      <HomeContent />
    </HomeWrapper>
  );
};

export default Home;
