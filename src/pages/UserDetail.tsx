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

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!user) return <p>Product not found</p>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};

export default UserDetail;
