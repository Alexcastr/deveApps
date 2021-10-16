import React from "react";
import { useUser } from "context/userContext";

const PrivateR = ({ roleList, children }) => {
    const {userData} = useUser();
    console.log('userdata', userData);
  if (roleList.includes(userData.role)) {
    return children;
  } 
    return <div className='BannerDenegado'>No estás autorizado para ver este sitio.</div>;

};

export default PrivateR;
