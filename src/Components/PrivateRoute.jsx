import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return isAuthenticated ? (
    <>{children}</>
  ) : (
    <div>
      <div>No estás autorizado para ver este sitio</div>
      <Link to="/"><span>Registrarse</span></Link>
    </div>
  );
};

export default PrivateRoute;
