// src/components/Rooms.js
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, onSnapshot } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';

const Rooms = ({ user }) => {
  const [roomName, setRoomName] = useState('');
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate('/');
  }, [user]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'chatRooms'), (snapshot) => {
      setRooms(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsub();
  }, []);

  const createRoom = async () => {
    if (roomName.trim()) {
      await addDoc(collection(db, 'chatRooms'), { name: roomName });
      setRoomName('');
    }
  };

  return (
    <div className="center">
      <h2>Welcome, {user?.displayName}</h2>
      <input
        placeholder="Enter room name"
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
      />
      <button onClick={createRoom}>Create Room</button>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            <Link to={`/chat/${room.id}`}>{room.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rooms;
