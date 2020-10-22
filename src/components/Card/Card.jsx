import React from "react";
import PropTypes from "prop-types";
import { CardContainer, CardImage, CardWrapper } from "./Card.style";

const Card = ({ image, title, alt, image2, title2, alt2, image3, title3, alt3 }) => {
  return (
    <CardContainer>
      <CardWrapper>
        <CardImage src={image} alt={alt} />
        <h3>{title}</h3>
      </CardWrapper>
      <CardWrapper>
        <CardImage src={image2} alt={alt2} />
        <h3>{title2}</h3>
      </CardWrapper>
      <CardWrapper>
        <CardImage src={image3} alt={alt3} />
        <h3>{title3}</h3>
      </CardWrapper>
    </CardContainer>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  image2: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  alt2: PropTypes.string.isRequired,
  image3: PropTypes.string.isRequired,
  title3: PropTypes.string.isRequired,
  alt3: PropTypes.string.isRequired,
};

export default Card;
