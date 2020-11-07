import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

export const SideText = styled.p`
  position: absolute;
  transform: rotate(270deg);
  bottom: -1000px;
  letter-spacing: 12px;
  z-index: -3;
  color: #054cb4;
  font-size: 17px;
  font-weight: bold;
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 1024px) {
    bottom: -800px;
    font-size: 14px;
    left: -40px;
  }
`;
