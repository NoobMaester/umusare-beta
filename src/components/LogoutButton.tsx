import { signOut } from "../lib/auth";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut();
      navigate("/login");
    } catch (error: unknown) {
      console.error("Logout failed:", (error as Error).message);
    }
  };

  return (
    <button onClick={handleLogout} className="bg-[#00df9a] text-black px-4 py-2 my-8 font-medium rounded-md hover:bg-[#00c48c]">
      Logout
    </button>
  );
};

export default LogoutButton;
