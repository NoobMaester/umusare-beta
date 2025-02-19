import { useEffect, useState } from "react";
import { fetchUsers } from "./../services/api";

interface User {
  id: number;
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
  };
}

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data.results);
        console.log(data.results);
      } catch (error) {
        setError(
          `Failed to fetch users: ${
            error instanceof Error ? error.message : "Unknown error"
          }`
        );
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="p-6 max-w-4xl mt-16">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
        User List
      </h2>
      <ul className="flex justify-center items-center flex-wrap gap-4">
        {users.map((user) => (
          <li
            key={user.id}
            className="grid items-center p-4 bg-gray-100 rounded-lg"
          >
            <img src={user.picture.large} alt="profile" />
            <p className="text-gray-900 font-bold py-4">
              {user.name.first} {user.name.last}
            </p>
            <p className="text-gray-600 py-2">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
