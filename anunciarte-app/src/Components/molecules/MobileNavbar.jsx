import { useState } from 'react';
import logoA from "./../../assets/anunciarteLogo03.png";
import { Icon } from "@iconify/react";
import DropDown from './../atoms/dropDown'; 
import "./mobileNavbar.css";

export default function MobileNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    console.log('Menu toggled')
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbarContainer">
      <img src={logoA} alt="anunciArte" />
      <div className="burgerIcon" onClick={handleMenuToggle}>
        <Icon icon="pajamas:hamburger" color="white" />
      </div>

      {menuOpen && <DropDown />}
    </div>
  );
}
