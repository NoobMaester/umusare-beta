import React, { useState, useEffect } from "react";
import { fetchUsers } from "../lib/api";
import profile from "./../assets/profile.png";
import { Link } from "react-router-dom";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const Sailors = React.memo(() => {
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

  if (loading) return <div className="text-center text-white">Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="w-full bg-gray-900 min-h-screen">
      {/* Header Section */}
      <div className="pt-24 pb-12 text-center">
        <h1 className="text-4xl font-bold text-[#00df9a]">Meet Our Sailors</h1>
        <p className="mt-4 text-lg text-gray-300">Explore the profiles of our experienced sailors.</p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-[1240px] mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-3 gap-8">
          {users.map((user) => (
            <Link 
              to={`/users/${user.id}`} 
              key={user.id} 
              className="bg-white rounded-lg shadow-xl flex flex-col p-4 my-4 hover:scale-105 duration-300 ease-in-out relative"
            >
              <img
                className="w-20 h-20 mx-auto -mt-10 rounded-full border-4 border-white"
                src={profile}
                alt={`${user.name}'s profile`}
              />
              <h2 className="text-2xl font-bold text-center py-4 text-gray-800">
                {user.name}
              </h2>
              <p className="text-gray-600 text-center py-2 border-b">
                {user.email}
              </p>
              <p className="text-gray-600 text-center py-2">
                {user.phone}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Sailors;
