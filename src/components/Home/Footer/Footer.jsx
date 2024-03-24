import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="left-text">
            <p>Karo Abhyas <br /> 112, ELECTRONIC CITY <br /> BANGALORE, INDIA</p>
        </div>
        <div className="right-text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quod, quasi. Aliquid illum et incidunt veniam.</p>    
            <button className="custom-button">Click me</button>
            <button className="custom-button">About</button>
        </div>
      </div>
      <div className="row">
      <div className="footer-col">
        <h4>company</h4>
        <ul>
          <li><a href="#">about us</a></li>
          <li><a href="#">our services</a></li>
          <li><a href="#">privacy policy</a></li>
          <li><a href="#">affiliate program</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>get help</h4>
        <ul>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">shipping</a></li>
          <li><a href="#">returns</a></li>
          <li><a href="#">order status</a></li>
          <li><a href="#">payment options</a></li>
        </ul>
      </div>
      <div className="footer-col">
          <h4>Education</h4>
          <ul>
            <li><a href="#">Mathematics</a></li>
            <li><a href="#">Science</a></li>
            <li><a href="#">History</a></li>
            <li><a href="#">Literature</a></li>
          </ul>
      </div>
    </div>
    </footer>
  );
}

export default Footer;
