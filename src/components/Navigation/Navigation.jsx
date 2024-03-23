import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/karoabhyasLogo.png';
import PropTypes from 'prop-types'; 
import './Navigation.css';
import Classes from '../Classes/Classes';
import Products from '../Products/Products';
import AboutUs from '../About/About';
import Login from '../Login/Login';
import Cart from '../Cart/Cart';

function Navigation({ handleTabClick }) {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(index);
    handleTabClick(index); 
  };

  const renderComponent = () => {
    switch (activeItem) {
      case 1:
        return <Classes />;
      case 2:
        return <Products />;
      case 3:
        return <AboutUs />;
      case 4:
        return <Login />;
      case 5:
        return <Cart />;
      default:
        return null;
    }
  };

  return (
    <>
      <nav className="navigation">
        <div className="logo-container">
          <h1 className="title" onClick={() => handleItemClick(null)}> {/* Add onClick for Home */}
            <a style={{ color: "black", textDecoration: "none" }} href="/">KaroAbhayaas</a>
          </h1>
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
      {renderComponent()}
    </>
  );
}

// Because of ESLint
Navigation.propTypes = {
  handleTabClick: PropTypes.func.isRequired,
};

export default Navigation;
