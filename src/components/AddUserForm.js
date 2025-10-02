import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddUserForm({ addUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !email) {
      setError("Name and Email are required");
      return;
    }
    const newUser = {
      id: Math.random(),
      name,
      email,
      company: { name: "Link Plus" },
    };
    addUser(newUser);
    navigate("/");
  };

  return (
    <div className="container mt-4 d-flex flex-column align-items-center">
      <h2 className="mb-3 w-50">Add User</h2>
      {error && <div className="alert alert-danger">(error)</div>}
      <form onSubmit={handleSubmit} className="card p-4 shadow-sm w-50">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Add User</button>
      </form>
    </div>
  );
}
