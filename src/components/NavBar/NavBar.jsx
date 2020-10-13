import React, { useState, useRef, useEffect } from "react";
import { BsList } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import LogoIMG from "../../../public/images/logo.png";
import {NavBarContainer, SidePanel, CloseButton, OpenButton, Logo} from "./NavBar.style";

const NavBar = () => {
  const [isPanelOpen, setPanel] = useState(false);
  const node = useRef();

  const OpenPanel = () => {
    setPanel(!isPanelOpen);
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (node.current.contains(e.target)) {
        return;
      }
      if (isPanelOpen) {
        setPanel(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isPanelOpen]);

  return (
    <NavBarContainer>
      <div>
        <a href="/#">
          <Logo src={LogoIMG} href="#" alt="logo" />
        </a>
      </div>
      <div>
        <SidePanel
          ref={node}
          id="mySidepanel"
          style={{ width: isPanelOpen ? "250px" : "0px" }}
         
        >
          <a href="/#">Home</a>
          <a href="#quemsomos">Quem somos</a>
          <a href="#servicesContainer">Serviços</a>
          <a href="#footerContainer">Contato</a>
          <CloseButton className="closebtn" onClick={OpenPanel}>
            <AiOutlineCloseCircle />
          </CloseButton>
        </SidePanel>
        <OpenButton className="openbtn" onClick={OpenPanel}>
          <BsList />
        </OpenButton>
      </div>
      <ul>
        <li>
          <a href="/#">Home</a>
        </li>
        <li>
          <a href="#quemsomos">Quem somos</a>
        </li>
        <li>
          <a href="#servicesContainer">Serviços</a>
        </li>
        <li>
          <a href="#footerContainer">Contato</a>
        </li>
      </ul>
    </NavBarContainer>
  );
};


export default NavBar;
