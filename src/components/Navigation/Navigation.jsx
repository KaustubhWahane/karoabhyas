import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; 
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; 
import { useState } from 'react';
import './Navigation.css';

function Navigation() {
  const [activeItem, setActiveItem] = useState(null); 

  const handleItemClick = (index) => {
    setActiveItem(index); 
  };
  
  return (
    <nav className="navigation">
      <h1 className="title">KaroAbhayaas</h1>
      <ul className="nav-list">
        <li><button className={`button ${activeItem === 0 ? 'black' : ''}`} onClick={() => handleItemClick(0)}>Join Us</button></li>
        <li><a className={`nav-item ${activeItem === 1 ? 'black' : ''}`} href="#" onClick={() => handleItemClick(1)}>Classes</a></li>
        <li><a className={`nav-item ${activeItem === 2 ? 'black' : ''}`} href="#" onClick={() => handleItemClick(2)}>Products</a></li>
        <li><a className={`nav-item ${activeItem === 3 ? 'black' : ''}`} href="#" onClick={() => handleItemClick(3)}>About Us</a></li>
        <li><a className={`nav-item ${activeItem === 4 ? 'black' : ''}`} href="#" onClick={() => handleItemClick(4)}><FontAwesomeIcon icon={faUser} /></a></li>
        <li><a className={`nav-item ${activeItem === 5 ? 'black' : ''}`} href="#" onClick={() => handleItemClick(5)}><FontAwesomeIcon icon={faShoppingCart} /></a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
