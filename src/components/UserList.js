import { useState } from "react";
import { Link } from "react-router-dom";

export default function UserList({users}) {
    const [search, setSearch] = useState("");

    const filtered = users.filter(
        (user) =>
            user.name.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div style={{ padding: 10}}>
        <h2>Users</h2>
        <input
        placeholder="Search by name or email"
        value={search}
        onChange={(element) => setSearch(element.target.value)}
        />
        <ul>
            {filtered.map((user) => (
                <li key={user.id}>
                    <Link to={`/user/${user.id}`}>
                        {user.name} - {user.email} ({user.company?.name})
                    </Link>
                </li>
            ))}
        </ul>

        </div>
    );
}