import { useParams, Link } from "react-router-dom";

export default function UserDetails({ users }) {
  const { id } = useParams();
  const user = users.find((user) => String(user.id) === id);

  if (!user) return <p>User not found!</p>;
  return (
    <div style={{ padding: 10 }}>
      <Link to="/">Back</Link>

      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <p>
        Address: {user.address?.city}, {user.address?.street}
      </p>
    </div>
  );
}
