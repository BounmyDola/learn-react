import React from "react";
import styles from "./UserList.module.css";
const UserList = () => {
  const users = [
    { id: 1, name: "John Doe", age: 25 },
    { id: 2, name: "Jane Smith", age: 32 },
    { id: 3, name: "Bob Johnson", age: 40 },
    // Add more users as needed
  ];
  return (
    <div className={styles.userContainer}>
      <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
