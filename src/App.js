import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
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
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            LinkPlus
          </Link>
          <button className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active fw-bold" : "")
                  }
                  to="/"
                  end
                >
                  Users
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active fw-bold" : "")
                  }
                  to="/add"
                >
                  Add
                </NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<UserList users={users} />} />
          <Route path="/user/:id" element={<UserDetails users={users} />} />
          <Route path="/add" element={<AddUserForm addUser={addUser} />} />
        </Routes>
      </div>
    </BrowserRouter>

  )
}
