import './LoginAccess.css';
function LoginAccess() {
  return (
   <>
    <div className="parent-container">
    <div className="left-container">
    <h1>Kaustubh</h1>
    <p>7506573355</p>
    <p>kaustubhwahane55@gmail.com</p>
    <button type="button"  className="login-button">Edit</button>
    <button type="button"  className="login-button">Logout</button>
    </div>
    <div className="right-container">
      <h1>ADDRESS</h1>
      <p>C-1/003,Devdutta Co-op <br /> Lulla Complex , Adharwadi Jail Road <br /> Kalyan , Mumbai <br /> PIN: 421301</p>
    </div>
  </div>
  <div className="parent-container">
    <div className="left-container">
    <h1>ORDER #1293</h1>
    <p>PRODUCT : Sample Book Name</p>
    <p>DATE: 24/4/2024</p>
    <p>C-1/003,Devdutta Co-op <br /> Lulla Complex , Adharwadi Jail Road <br /> Kalyan , Mumbai <br /> PIN: 421301</p>
    </div>
    <div className="right-container">
    <button type="button"  className="login-button">VIEW DETAILS</button>
    <button type="button"  className="login-button">TRACK ORDER</button>
    <button type="button"  className="login-button">DOWNLOAD INVOICE</button>
    </div>
  </div>
   </>
  
  );
}

export default LoginAccess;