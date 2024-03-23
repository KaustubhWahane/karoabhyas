import { useState } from 'react';
import './App.css';
import Classes from './components/Classes/Classes';
import Navigation from './components/Navigation/Navigation';
import Products from './components/Products/Products';
import AboutUs from './components/About/About';
import User from './components/Login/Login';
import Cart from './components/Cart/Cart';

function App() {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="app-container">
      <Navigation handleTabClick={handleTabClick} />
      <div className="rendered-component">
        {activeTab === 'Classes' && <Classes />}
        {activeTab === 'Products' && <Products />} 
        {activeTab === 'AboutUs' && <AboutUs />} 
        {activeTab === 'User' && <User />} 
        {activeTab === 'Cart' && <Cart />} 
      </div>
    </div>
  );
}

export default App;
