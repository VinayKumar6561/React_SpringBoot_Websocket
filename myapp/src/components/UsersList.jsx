import React, { useEffect, useState } from 'react';
import { connectWebSocket } from '../websocket/websocket.jsx';
import axios from 'axios';
import '../styles/UserList.css';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/selectalldata').then((response) => {
      setUsers(response.data);
    });

    connectWebSocket((newUser) => {
      setUsers((prevUsers) => [...prevUsers, newUser]);
    });
  }, []);

  return (
    <div className="user-list-container">
      <h2>All Users</h2>
      <div className="card-container">
        {users.map((user, index) => (
          <div className="user-card" key={index}>
            <h3>User ID: {user.userid}</h3>
            <p><strong>Name:</strong> {user.username}</p>
            <p><strong>Role:</strong> {user.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;
