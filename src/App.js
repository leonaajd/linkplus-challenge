import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import AddUserForm from "./components/AddUserForm";
import { useEffect, useState } from "react";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const addUser = (newUser) => {
    setUsers([newUser, ...users]);
  };

  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: 12, padding: 12 }}>
        <Link to="/">Users</Link> | <Link to="/add">Add</Link>
      </nav>

    <Routes>
      <Route path="/" element={<UserList users={users} />} />
      <Route path="/user/:id" element={<UserDetails users={users} />} />
      <Route path="/add" element={<AddUserForm addUser={addUser} />} />
    </Routes>
    
    </BrowserRouter>

  )
}
