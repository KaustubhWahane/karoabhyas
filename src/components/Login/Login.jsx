import { useState } from 'react';
import './Login.css'; 

function Login() {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleLogin = () => {
    alert('Just to check its working!');
  };

  const handleSignUp = () => {
    alert('Just to check its working!');
  };

  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <div className="login-container">
      <h2 className="login-heading">{showSignUp ? 'Sign Up' : 'Login'}</h2>
      <form>
        {showSignUp ? (
          <>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name:</label>
              <input 
                type="text" 
                id="name" 
                className="form-input" 
                size={30}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email:</label>
              <input 
                type="email" 
                id="email" 
                className="form-input"
                size={30} 
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
              <input 
                type="tel" 
                id="phoneNumber" 
                className="form-input" 
                size={20}
              />
              <button type="button" onClick={handleSignUp} className="login-button">Send OTP</button>
              <p>Didn&apos;t recieve it? <a href="#" style={{textDecoration:"none"}}>RESEND</a></p>
            </div>
            <div className="form-group">
              <label htmlFor="otp" className="form-label">OTP:</label>
              <input 
                type="text" 
                id="otp" 
                className="form-input"
                size={30} 
              />
            </div>
            <button type="button" onClick={handleSignUp} className="login-button">Sign Up</button>
          </>
        ) : (
          <>
            <div className="form-group">
              <label htmlFor="username" className="form-label">Username:</label>
              <input 
                type="text" 
                id="username" 
                className="form-input" 
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">Password:</label>
              <input 
                type="password" 
                id="password" 
                className="form-input" 
              />
            </div>
            <button type="button" onClick={handleLogin} className="login-button">Login</button>
          </>
        )}
      </form>
      <p>
        {showSignUp ? 'Already have an account? ' : "Don't have an account? "}
        <button type="button" onClick={toggleSignUp} className="signup-button">
          {showSignUp ? 'Login' : 'Sign Up'}
        </button>
      </p>
    </div>
  );
}

export default Login;
