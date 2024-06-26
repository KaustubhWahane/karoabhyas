import { useState } from 'react';
import './Cart.css';

function Cart() {
  const [showPopup, setShowPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const toggleDeletePopup = () => {
    setShowDeletePopup(!showDeletePopup);
  };

  return (
    <div className="cart">
      <div className="main-container">
        <div className="left-side">Total: 2000 Rupees</div>
        <div className="right-side">
          <button className="checkout-button" onClick={togglePopup}>Checkout</button>
        </div>
        <div className="question-container">
          <div className="question">
            <div className="left-side">
              <div className="question-title">Question Title</div>
              <div className="module">Module: NAME OF MODULE</div>
              <div className="date">Date: 24/04/2024</div>
            </div>
            <div className="right-side">
              <select className="dropdown">
                {[...Array(10).keys()].map(num => (
                  <option key={num + 1} value={num + 1}>{num + 1}</option>
                ))}
              </select>
              <button className="delete-button" onClick={toggleDeletePopup}>Delete</button>
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2 style={{color:"black"}}>PLEASE PROVIDE YOUR ADDRESS</h2>
            <textarea style={{ width: "500px", height: "100px" }} type="text" placeholder="Enter your address" />
            <button onClick={togglePopup}>Close</button>
          </div>
        </div>
      )}
      {showDeletePopup && (
      <div className="popup">
        <div className="popup-content">
          <h2 style={{color:"black"}}>DELETE BOOK FROM CART?</h2>
          <div className="popup-buttons">
            <button onClick={toggleDeletePopup} style={{ marginRight: "10px" }}>Cancel</button>
            <button style={{marginLeft: "15em" }}>Delete</button>
          </div>
        </div>
      </div>
)}

    </div>
  );
}

export default Cart;
