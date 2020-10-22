import React from "react";
import Servicos from "./Servicos";
import QuemSomos from "./QuemSomos";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Banner from "../components/Banner";

export default function MyApp() {
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
}
