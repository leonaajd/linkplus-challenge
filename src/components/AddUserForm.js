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
    <div style={{ padding: 10 }}>
      <h2>Add User</h2>
      {error && <p style={{ color: "red" }}>(error)</p>}
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <input
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}
