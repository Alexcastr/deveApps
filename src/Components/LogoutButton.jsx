import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <div
      className="headerButton"
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      <i className="bi bi-box-arrow-left headerIcon"></i>
      <p>Cerrar Sesion</p>
    </div>
  );
};

export default LogoutButton;
