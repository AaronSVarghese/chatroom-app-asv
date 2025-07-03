// src/components/ChatRoom.js
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from 'firebase/firestore';
import { useParams, useNavigate } from 'react-router-dom';

const ChatRoom = ({ user }) => {
  const { roomId } = useParams();
  const [msg, setMsg] = useState('');
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate('/');
  }, [user]);

  useEffect(() => {
    const q = query(
      collection(db, `chatRooms/${roomId}/messages`),
      orderBy('createdAt')
    );
    const unsub = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()));
    });
    return () => unsub();
  }, [roomId]);

  const sendMessage = async () => {
    if (msg.trim()) {
      await addDoc(collection(db, `chatRooms/${roomId}/messages`), {
        text: msg,
        user: user.displayName,
        uid: user.uid,
        createdAt: serverTimestamp(),
      });
      setMsg('');
    }
  };

  return (
    <div className="center">
      <h3>Room ID: {roomId}</h3>
      <div className="chat-box">
        {messages.map((m, i) => (
          <p key={i}>
            <strong>{m.user}:</strong> {m.text}
          </p>
        ))}
      </div>
      <input
        placeholder="Type message..."
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatRoom;
