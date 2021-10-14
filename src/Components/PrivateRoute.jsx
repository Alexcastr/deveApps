import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ReactLoading from "react-loading";

const PrivateRoute = ({ children }) => {
  const {
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    getAccessTokenSilently,
  } = useAuth0();

  useEffect(() => {
    const fetchAuth0Token = async () => {
      const accessToken = await getAccessTokenSilently({
        audience: 'api-autenticacion-deveapps',
    });
    localStorage.setItem('token', accessToken);
    };
    if (isAuthenticated){
      fetchAuth0Token();
    }
  },[isAuthenticated, getAccessTokenSilently]);

  if (isLoading) {
    return <div><ReactLoading type="cylon" color="blue" height={667} width={375} /></div>;
  }
  if (!isAuthenticated) {
    return loginWithRedirect();
  }
  return <>{children}</>;

};

export default PrivateRoute;
