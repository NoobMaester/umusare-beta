import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FC, ReactNode } from "react";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth) {
    navigate('/login');
    return null;
  }
  
  return auth.user ? <>{children}</> : null;
};

export default PrivateRoute;
