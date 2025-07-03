// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Rooms from './components/Rooms';
import ChatRoom from './components/ChatRoom';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route path="/rooms" element={<Rooms user={user} />} />
        <Route path="/chat/:roomId" element={<ChatRoom user={user} />} />
      </Routes>
    </Router>
  );
}

export default App;
