import "./mobileNavbar.css"
import logoA from "./../../assets/anunciarteLogo03.png";
import { Icon } from "@iconify/react";

export default function MobileNavbar() {
  return (
    <div className="navbarContainer">
      <img src={logoA} alt="anunciArte" />
      <Icon icon="pajamas:hamburger" color="white" className="burgerIcon" />


    </div>
  )
}
