// src/components/Login.js
import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      navigate('/rooms');
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  };

  return (
    <div className="center">
      <h2>React Chat App</h2>
      <button onClick={handleLogin}>Sign in with Google</button>
    </div>
  );
};

export default Login;
