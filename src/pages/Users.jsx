import React from "react";
import Header from "Components/header";
import Bodyuser from "Components/Bodyuser";
import PrivateRoute from "Components/PrivateRoute";
const Users = () => {
  return (
    <PrivateRoute>
      <>
        <Header current="usuarios" />
        <Bodyuser />
      </>
    </PrivateRoute>
  );
};

export default Users;
