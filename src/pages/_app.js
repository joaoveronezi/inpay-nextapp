import React from "react";
import PropTypes from "prop-types";
// import Head from "next/head";
// import NavBar from "../components/NavBar";
import GlobalStyle from "../assets/styles/global";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.node, PropTypes.func, PropTypes.object]).isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default App;
