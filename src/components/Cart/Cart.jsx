import "./Cart.css";

function Cart() {
  return (
    <div className="cart">
      <div className="main-container">
        <div className="left-side">Total: 2000 Rupees</div>
        <div className="right-side">
          <button className="checkout-button">Checkout</button>
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
              <button className="delete-button">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
