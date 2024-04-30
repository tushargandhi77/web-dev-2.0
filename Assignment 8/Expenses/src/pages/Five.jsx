// Five.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";

const Five = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User Details</h1>
      <div className="user-cards">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <img src={user.photo} alt={user.name} />
            <div>
              <h2>{user.name}</h2>
              <p>{user.address}</p>
              <p>Mobile: {user.mobile}</p>
              <p>Email: {user.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Five;
