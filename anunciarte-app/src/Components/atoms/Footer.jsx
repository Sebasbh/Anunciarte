import { Icon } from '@iconify/react';
import "./footer.css";

export default function Footer() {
  return (
    <div className="footerContainer">      
        <Icon icon="ic:round-home" color="white" />
        <Icon icon="material-symbols:favorite-outline" color="white" />
        <Icon icon="carbon:notification" color="white" />
        <Icon icon="icon-park-outline:buy" color="white" />        
    </div>
  )
}
