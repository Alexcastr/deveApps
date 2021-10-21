import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
    
  const cerrarSesion =() =>{
    logout({ returnTo: "https://guarded-cliffs-20567.herokuapp.com/goto" })
    localStorage.setItem('token', null)
  }
  
  const { logout } = useAuth0();
  return (
    <div
      className="headerButton"
      onClick={() => cerrarSesion()}
    >
      <i className="bi bi-box-arrow-left headerIcon"></i>
      <p>Cerrar Sesion</p>
    </div>
  );
};

export default LogoutButton;
