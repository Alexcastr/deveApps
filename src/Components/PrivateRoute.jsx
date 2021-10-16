import React, { useEffect, useState } from "react";
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
    logout
  } = useAuth0();
  const [loadingUserInformation, setLoadingUserInformation] = useState(false);
//pedir token
  useEffect(() => {
    setLoadingUserInformation(true);
    const fetchAuth0Token = async () => {
      const accessToken = await getAccessTokenSilently({
        audience: "api-autenticacion-deveapps",
      });
      localStorage.setItem("token", accessToken);
      console.log(accessToken);
      await getUserData(
        (response) => {
          console.log("response", response);
          setUserData(response.data);
          setLoadingUserInformation(false);
        },
        (error) => {
          console.error('error',error);
          setLoadingUserInformation(false);
          logout({ returnTo: 'http://localhost:3000/admin' });
        }
      );
    };
    if (isAuthenticated) {
      fetchAuth0Token();
    }
  }, [isAuthenticated, getAccessTokenSilently,setUserData]);

  if (isLoading || loadingUserInformation) {
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
