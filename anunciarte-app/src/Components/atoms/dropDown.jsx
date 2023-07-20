import { Icon } from '@iconify/react';
import './dropdown.css';

const DropdownMenu = () => {
  return (
    <ul className="dropdown-menu">
        <li>
        <Icon icon="ic:baseline-close" color="gray" />
        </li>
      <li>PAINTING</li>
      <li>PRINTS</li>
      <li>PHOTO</li>
      <li>DRAWING</li>
      <li>SCULPTURE</li>
      <li>NFT</li>
    </ul>
  );
};

export default DropdownMenu;