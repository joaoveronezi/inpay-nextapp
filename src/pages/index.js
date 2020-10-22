import React from "react";
import Servicos from "../components/Servicos";
import QuemSomos from "../components/QuemSomos";
import Header from "../components/Header";
import Home from "../components/Home";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

const MyApp = () => {
  return (
    <>
      <Home />
      <Header />
      <QuemSomos />
      <Servicos />
      <Banner />
      <Footer />
    </>
  );
};

export default MyApp;
