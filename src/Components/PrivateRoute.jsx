import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ReactLoading from "react-loading";
import { getUserData } from "utils/apiUsers";
import { useUser } from "context/userContext";

const PrivateRoute = ({ children }) => {
  const {setUserData} = useUser();
  const {
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    getAccessTokenSilently,
  } = useAuth0();

  useEffect(() => {
    const fetchAuth0Token = async () => {
      const accessToken = await getAccessTokenSilently({
        audience: "api-autenticacion-deveapps",
      });
      localStorage.setItem("token", accessToken);
      await getUserData(
        (response) => {
          console.log("response", response);
          setUserData(response.data);
        },
        (error) => {
          console.error(error);
        }
      );
    };
    if (isAuthenticated) {
      fetchAuth0Token();
    }
  }, [isAuthenticated, getAccessTokenSilently, setUserData]);

  if (isLoading) {
    return (
      <div>
        <ReactLoading type="cylon" color="blue" height={667} width={375} />
      </div>
    );
  }
  if (!isAuthenticated) {
    return loginWithRedirect();
  }
  return <>{children}</>;
};

export default PrivateRoute;
