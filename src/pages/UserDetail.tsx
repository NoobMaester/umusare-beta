import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchUserById } from "./../lib/api";
import { Card } from "flowbite-react";
import profile from "./../assets/profile.png";


interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
}

const UserDetail = () => {
  const { id } = useParams();
  //console.log("user id",id);

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setUser(null);
        setLoading(true);
        console.log("user id",id);
        
        const loadUser = async () => {
            if (!id) return;
            try {
                const data = await fetchUserById(id);
                setUser(data);
                console.log(data);
            } catch (error: unknown) {
                setError(
                    `Failed to fetch user: ${
                        error instanceof Error ? error.message : "Unknown error"
                    }`
                );
            } finally {
                setLoading(false);
            }
        };
        loadUser();
    }, [id]);

    if (loading) return <p className="text-center text-2xl py-4 text-[#00df9a]">Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!user) return <p>User not found</p>;

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Card className="max-w-sm w-full">
        <div className="flex flex-col justify-center items-center pb-10">
          <img
            alt="profile"
            src={profile}
            className="mb-3 rounded-full shadow-lg h-24 w-24"
          />
          <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
          <div className="mt-4 flex space-x-3 lg:mt-6">
            <a
              href="#"
              className="inline-flex items-center rounded-lg bg-[#00df9a] px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            >
              Add friend
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              Message
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default UserDetail;
