import UsersButton from "./usersButton";
import ProductButton from "./productButton";
import SalesButton from "./salesButton";
import LogoutButton from "./LogoutButton";
import PrivateComponent from "./PrivateComponent";
import { useAuth0 } from "@auth0/auth0-react";
import UserInfo from "./UserInfo";

const Header = ({ current }) => {
  const { user } = useAuth0();

  if (current === "usuarios") {
    return (
      <header className="header">
        <UserInfo data={user} />
        <PrivateComponent roleList={["Administrador"]}>
          <UsersButton clase="currentButtonLink" />
        </PrivateComponent>
        <PrivateComponent roleList={["Administrador", "Vendedor"]}>
          <SalesButton clase="buttonLink" />
          <ProductButton clase="buttonLink" />
        </PrivateComponent>
        <LogoutButton />
      </header>
    );
  } else if (current === "ventas") {
    return (
      <header className="header">
        <UserInfo data={user} />
        <PrivateComponent roleList={["Administrador"]}>
          <UsersButton clase="buttonLink" />
        </PrivateComponent>
        <PrivateComponent roleList={["Administrador", "Vendedor"]}>
          <SalesButton clase="currentButtonLink" />
          <ProductButton clase="buttonLink" />
        </PrivateComponent>
        <LogoutButton />
      </header>
    );
  } else if (current === "productos") {
    return (
      <header className="header">
        <UserInfo data={user} />
        <PrivateComponent roleList={["Administrador"]}>
          <UsersButton clase="buttonLink" />
        </PrivateComponent>
        <PrivateComponent roleList={['Administrador', 'Vendedor']}>
          <SalesButton clase="buttonLink" />
          <ProductButton clase="currentButtonLink" />
        </PrivateComponent>
        <LogoutButton />
      </header>
    );
  }
};

export default Header;
