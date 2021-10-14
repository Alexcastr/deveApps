import Header from "Components/header";
import SalesBody from "Components/salesBody";
import PrivateRoute from "Components/PrivateRoute";
const Sales = () => {
  return (
    <PrivateRoute>
      <>
        <Header current="ventas" />
        <SalesBody />
      </>
    </PrivateRoute>
  );
};

export default Sales;
