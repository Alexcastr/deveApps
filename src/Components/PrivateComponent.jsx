import React from "react";
import { useUser } from "context/userContext";

const PrivateComponent = ({ roleList, children }) => {
    const {userData} = useUser();
    console.log('userdata', userData);
  if (roleList.includes(userData.role)) {
    return children;
  } 
    return <></>;

};

export default PrivateComponent;
