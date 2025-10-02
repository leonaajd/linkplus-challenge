import { useParams, Link } from "react-router-dom";

export default function UserDetails({ users }) {
  const { id } = useParams();
  const user = users.find((u) => String(u.id) === id);

  if (!user) {
    return (
      <div className="container mt-4">
        <div className="alert alert-warning">User not found</div>
        <Link to="/" className="btn btn-secondary mt-2">
          ← Back to Users
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h3 className="card-title mb-4">
            <i className="bi bi-person-circle me-2"></i>
            {user.name}
          </h3>

          <p className="card-text">
            <i className="bi bi-envelope-fill text-primary me-2"></i>
            <strong>Email:</strong> {user.email}
          </p>

          <p className="card-text">
            <i className="bi bi-telephone-fill text-success me-2"></i>
            <strong>Phone:</strong> {user.phone}
          </p>

          <p className="card-text">
            <i className="bi bi-globe2 text-info me-2"></i>
            <strong>Website:</strong>{" "}
            <a href={`http://${user.website}`} target="_blank" rel="noreferrer">
              {user.website}
            </a>
          </p>

          <p className="card-text">
            <i className="bi bi-geo-alt-fill text-danger me-2"></i>
            <strong>Address:</strong> {user.address?.street},{" "}
            {user.address?.city}
          </p>

          <p className="card-text">
            <i className="bi bi-building text-warning me-2"></i>
            <strong>Company:</strong> {user.company?.name}
          </p>

          <Link to="/" className="btn btn-outline-dark mt-3">
            ← Back to Users
          </Link>
        </div>
      </div>
    </div>
  );
}
