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
    <button onClick={handleLogout} className="btn-secondary">
      Logout
    </button>
  );
};

export default LogoutButton;
