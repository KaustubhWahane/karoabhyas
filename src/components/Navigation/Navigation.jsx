import  { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/karoabhyasLogo.png';
import PropTypes from 'prop-types';
import './Navigation.css';

function Navigation({ handleClassesClick }) {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(index);
    // Call handleClassesClick function when the "Classes" list item is clicked
    if (index === 1) {
      handleClassesClick();
    }
  };

  return (
    <nav className="navigation">
      <div className="logo-container">
        <h1 className="title"><a style={{color:"black", textDecoration:"none"}}href="/">KaroAbhayaas</a> </h1>
        <img src={Logo} alt="Error in Logo" className='logocss' />
      </div>
      <ul className="nav-list">
        <li><button style={{ cursor: "pointer" }} onClick={() => handleItemClick(0)}>Join Us</button></li>
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

// This is because for ESLint
Navigation.propTypes = {
  handleClassesClick: PropTypes.func.isRequired, // Ensure handleClassesClick is a function and is required
};