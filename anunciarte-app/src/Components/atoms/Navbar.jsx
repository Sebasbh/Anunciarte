import "./navbar.css"
import Logo from "./../../assets/anunciarteLogo03.png"


export default function Navbar() {
  return (
    <nav className="navbar">
        <img src={Logo} alt="Logo" className="logo" />
        
    <ul className="menu">
      <li><a href="#">PAINTING</a></li>
      <li><a href="#">PRINTS</a></li>
      <li><a href="#">PHOTO</a></li>
      <li><a href="#">DRAWING</a></li>
      <li><a href="#">SCULPTURE</a></li>
      <li><a href="#">NFT</a></li>
    </ul>
  </nav>
  )
}
