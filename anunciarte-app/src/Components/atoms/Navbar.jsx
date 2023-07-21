import { useState } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import "./navbar.css";
import Logo from "../../assets/anunciarteLogo03.png";

export default function Navbar() {
  const [activeIcon, setActiveIcon] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
    // Add logic to handle the click event (e.g., navigate to the corresponding page)
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    // Add logic to handle the search submission (e.g., navigate to search results page)
    console.log('Search query:', searchQuery);
  };

  const handleNotificationClick = () => {
    setShowModal(true); // Show the modal when the notification icon is clicked
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={Logo} alt="Logo" className="logo" />
      </Link>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearchSubmit}>Buscar</button>
      </div>
      <div className="navbar-icons">
        <Link to="/" onClick={() => handleIconClick('home')} className={activeIcon === 'home' ? 'active' : ''}>
          <Icon icon="ic:round-home" />
        </Link>
        <Link to="/favorites" onClick={() => handleIconClick('favorite')} className={activeIcon === 'favorite' ? 'active' : ''}>
          <Icon icon="material-symbols:favorite-outline" />
        </Link>
        <button onClick={handleNotificationClick} className={activeIcon === 'notification' ? 'active' : ''}>
          <Icon icon="carbon:notification" />
        </button>
        <Link to="/buy" onClick={() => handleIconClick('buy')} className={activeIcon === 'buy' ? 'active' : ''}>
          <Icon icon="icon-park-outline:buy" />
        </Link>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="custom-modal">
          <button onClick={handleCloseModal} className="close-button">
            <Icon icon="carbon:close" />
          </button>
          <div className="modal-content">
            <h2>Notificaciones</h2>
            {/* Add content for the notifications here */}
          </div>
        </div>
      )}
    </nav>
  );
}
