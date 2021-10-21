import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ReactLoading from "react-loading";
import { getUserData } from "utils/apiUsers";
import { useUser } from "context/userContext";

const PrivateRoute = ({ children }) => {
  const { setUserData } = useUser();
  const [loadingUserInfo, setLoadingUserInfo] = useState(false);
  const {
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    getAccessTokenSilently,
    logout,
  } = useAuth0();

  useEffect(() => {
    const fetchAuth0Token = async () => {
      setLoadingUserInfo(true);
      const accessToken = await getAccessTokenSilently({
        audience: "api-autenticacion-deveapps",
      });
      localStorage.setItem("token", accessToken);
      await getUserData(
        (response) => {
          console.log("response", response);
          setUserData(response.data);
          setLoadingUserInfo(false);
        },
        (error) => {
          console.error("error al obtener datos de usuario: ", error);
          setLoadingUserInfo(false);
          logout({
            returnTo: "https://guarded-cliffs-20567.herokuapp.com/goto",
          });
        }
      );
    };
    if (isAuthenticated) {
      fetchAuth0Token();
    }
  }, [isAuthenticated, getAccessTokenSilently, setUserData]);

  if (isLoading || loadingUserInfo) {
    return (
      <div>
        <ReactLoading type="cylon" color="blue" height={667} width={375} />
      </div>
    );
  }
  if (!isAuthenticated) {
    return loginWithRedirect();
  }
  return children;
};

export default PrivateRoute;
