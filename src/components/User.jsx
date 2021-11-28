import React, { useEffect, useState } from "react";

const User = () => {
  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const url = `https://jsonplaceholder.typicode.com/users`;
    const response = await fetch(url); //trayendo la api
    const data = await response.json(); // convertimos la api en modo json
    setUsers(data); // []
  };

  return (
    <div>
      <h1>Usuarios: </h1>
      <hr />
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default User;
