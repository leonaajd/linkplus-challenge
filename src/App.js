import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import AddUserForm from "./components/AddUserForm";

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: 12, padding: 12 }}>
        <Link to="/">Users</Link>
        <Link to="/add">Add</Link>

      </nav>

    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/user/:id" element={<UserDetails />} />
      <Route path="/add" element={<AddUserForm />} />
    </Routes>
    
    </BrowserRouter>

  )
}
