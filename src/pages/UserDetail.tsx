import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchUserById } from "./../lib/api";

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
    if (!user) return <p>Product not found</p>;

  return (
    <div className="w-full py-[10rem] text-black px-4 bg-gray-100">
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};

export default UserDetail;
