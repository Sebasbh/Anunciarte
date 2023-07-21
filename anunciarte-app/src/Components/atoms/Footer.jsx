import { Icon } from '@iconify/react';
import "./footer.css";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="socialIcons">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Icon icon="brandico:facebook" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Icon icon="brandico:twitter" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Icon icon="brandico:instagram" />
        </a>
      </div>
      <p className="footerText">© 2023 Anunciarte. All rights reserved.</p>
    </div>
  );
}

