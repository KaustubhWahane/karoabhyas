import { useState } from 'react';
import './LoginAccess.css';

function LoginAccess() {
  const [content, setContent] = useState(null);

  function handleButtonClick(buttonContent) {
    setContent(buttonContent);
  }

  return (
    <>
      <div className="parent-container">
        <div className="left-container">
          <h1>Kaustubh</h1>
          <p>7506573355</p>
          <p>kaustubhwahane55@gmail.com</p>
          <button type="button" className="login-button">Edit</button>
          <button type="button" className="login-button">Logout</button>
        </div>
        <div className="vertical-line"></div>
        <div className="right-container">
          <h1>ADDRESS</h1>
          <p>C-1/003,Devdutta Co-op <br /> Lulla Complex , Adharwadi Jail Road <br /> Kalyan , Mumbai <br /> PIN: 421301</p>
        </div>
      </div>
      <button style={{ marginLeft: "10em" }} className="toggle-button" onClick={() => handleButtonClick("Orders")}>Orders</button>
      <button style={{ marginLeft: "10em" }} className="toggle-button" onClick={() => handleButtonClick("Tests")}>Tests</button>
      <button style={{ marginLeft: "10em" }} className="toggle-button" onClick={() => handleButtonClick("Q/A")}>Q/A</button>
      {content === "Orders" && (
        <div className="parent-container">
          <div className="left-container">
            <h1>ORDER #1293</h1>
            <p>PRODUCT : Sample Book Name</p>
            <p>DATE: 24/4/2024</p>
            <p>C-1/003,Devdutta Co-op <br /> Lulla Complex , Adharwadi Jail Road <br /> Kalyan , Mumbai <br /> PIN: 421301</p>
          </div>
          <div className="right-container">
            <button type="button" className="login-button">VIEW DETAILS</button>
            <button type="button" className="login-button">TRACK ORDER</button>
            <button type="button" className="login-button">DOWNLOAD INVOICE</button>
          </div>
        </div>
      )}
      {content === "Tests" && (
        <div className="parent-container">
          <div className="left-container">
            <h1>TEST NAME</h1>
            <p>MODULE: NAME OF MODULE</p>
            <p>DATE: 24/04/2024</p>
            <p>MARKS: 100</p>
            <p>DURATION: 30 MINS</p>
          </div>
          <div className="right-container">
            <button type="button" className="login-button">START</button>
          </div>
        </div>
      )}
      {content === "Q/A" && (
        <div className="container">
          <h1>QUESTION TITLE</h1>
          <p>MODULE: NAME OF MODULE</p>
          <p>DATE: 24/4/2024</p>
          <div className="right-container">
            <button type="button" className="login-button">VIEW REPLY</button>
          </div>
        </div>
      )}
    </>
  );
}

export default LoginAccess;