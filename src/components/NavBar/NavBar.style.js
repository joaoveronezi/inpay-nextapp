import styled from "styled-components";

export const NavBarContainer = styled.nav`
  background: #054cb4;
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 3;
  top: 0;
  ul {
    list-style-type: none;
    margin-right: 50px;
  }
  a {
    color: white;
    text-decoration: none;
  }
  a:hover {
    color: black;
  }
  li {
    display: inline-block;
    font-size: 16px;
    padding: 0.2rem;
    padding-left: 2rem;
  }
  @media (max-width: 768px) {
    width: 100%;
    z-index: 3;
    position: fixed;
    top: 0;
    ul {
      display: none;
    }
  }
`;

export const Logo = styled.img`
  margin-left: 40px;
  width: 120px;
  padding-top: 0.5rem;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const SidePanel = styled.div`
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #033074;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;
  visibility: visible;
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    padding: 15px 15px 15px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #f1f1f1;
    display: block;
    transition: 0.3s;
  }
  a:hover {
    color: #024cbd;
  }
`;
export const CloseButton = styled.button`
  padding: 15px 15px 15px 32px;
  font-size: 50px;
  color: white;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  float: right;
  display: block;
`;

export const OpenButton = styled.button`
  display: none;
  margin-top: 12px;
  color: white;
  font-size: 50px;
  background: transparent;
  border: none;
  outline: none;

  @media (max-width: 768px) {
    display: block;
  }
`;
