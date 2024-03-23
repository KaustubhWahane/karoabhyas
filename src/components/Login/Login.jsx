import { useState } from 'react';
import './Login.css'; // Import the CSS file where ye define yer classes

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showSignUp, setShowSignUp] = useState(false);

  const handleLogin = () => {
    // Here be where ye handle the login logic, me heartie!
    console.log('Logging in with:', username, password);
  };

  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <div className="login-container">
      <h2 className="login-heading">Name</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username" className="form-label">Username:</label>
          <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            className="form-input" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password:</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="form-input" 
          />
        </div>
        <button type="button" onClick={handleLogin} className="login-button">Login</button>
      </form>
      <p>
        Don&apos;t have an account? 
        <button type="button" onClick={toggleSignUp} className="signup-button">Sign Up</button>
      </p>
    </div>
  );
}

export default Login;
