import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./LoginForm.css"

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const users = [{ name: 'hroi', password: 'hr181201' }, { name: 'chana', password: 'ch020801' }];

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userIndex = users.findIndex((user) => user.name === name && user.password === password);
    console.log(userIndex);
    if (userIndex !== -1) {
      // Successful login
      navigate('/login/admin');
    } else {
      // Invalid credentials
      alert('Invalid name or password');
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label className="input-label">Name:</label>
          <input
            className="input-field"
            type="text"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="input-container">
          <label className="input-label">Password:</label>
          <input
            className="input-field"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button className="login-button" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
