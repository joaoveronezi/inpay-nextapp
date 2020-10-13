import React from "react";
import PropTypes from "prop-types"
import {AboutWrapper, AboutImgWrapper, AboutText, AboutImg} from "./About.style";

const About = ({ img, title, text, turn }) => {
  return (
    <AboutWrapper turn={turn}>
      <AboutImgWrapper turn={turn}>
        <AboutImg src={img} alt="logo" turn={turn} />
      </AboutImgWrapper>
      <AboutText turn={turn}>
        <h2>{title}</h2>
        <p>{text}</p>
      </AboutText>
    </AboutWrapper>
  );
};

About.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  turn: PropTypes.bool,
}

About.defaultProps = {
  turn: false,
}

export default About;
