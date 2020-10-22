import styled from "styled-components";

export const HomeWrapper = styled.div`
  background-image: url(${(props) => props.img});
  background-color: #054cb4;
  background-repeat: no-repeat;
  background-position: 0 100%;
  bottom: -1px;
  height: 100vh;
  width: 100%;
  min-width: 100%;
  min-height: 100%;
  @media (max-width: 768px) {
    background-color: #054cb4;
    background-image: none;
  }
`;
