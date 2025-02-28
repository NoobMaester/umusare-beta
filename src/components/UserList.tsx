import { useState, useEffect } from "react";
import { fetchUsers } from "./../lib/api";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
        console.log(data);
      } catch (error: unknown) {
        setError(
          `Failed to fetch users: ${
            error instanceof Error ? error.message : "Unknown error"
          }`
        );
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="w-full py-[10rem] px-4 bg-gray-100">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {users.map((user) => (
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ease-in-out">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src="profile.png"
              alt="profile"
            />
            <h2 className="text-2xl font-bold text-center py-4">{user.name}</h2>
            <p className="text-xl font-medium text-center py-2 border-b">
              {user.email}
            </p>
            <p className="text-xl font-medium text-center py-2 border-b">
              {user.phone}
            </p>
          </div>
          ))}
        </div>
    </div>
  );
};

export default UserList;
