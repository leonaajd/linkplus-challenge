import { useState } from "react";
import { Link } from "react-router-dom";

export default function UserList({ users }) {
  const [search, setSearch] = useState("");

  const filtered = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Users</h2>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search by name or email"
        value={search}
        onChange={(element) => setSearch(element.target.value)}
      />
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.company.name}</td>
              <td>
                <Link to={`/user/${user.id}`} className="btn btn-sm btn-success">
                View user
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
