import UsersButton from "./usersButton";
import ProductButton from "./productButton";
import SalesButton from "./salesButton";
import LogoutButton from "./LogoutButton";
import PrivateComponent from "./PrivateComponent";
const Header = ({ current }) => {
  if (current === "usuarios") {
    return (
      <header className="header">
      <PrivateComponent roleList={['Administrador']}>
        <UsersButton clase="currentButtonLink" />
      </PrivateComponent>
        <SalesButton clase="buttonLink" />
        <ProductButton clase="buttonLink" />
        <LogoutButton />
      </header>
    );
  } else if (current === "ventas") {
    return (
      <header className="header">
        <PrivateComponent roleList={['Administrador']}>
        <UsersButton clase="buttonLink" />
        </PrivateComponent>
        <SalesButton clase="currentButtonLink" />
        <ProductButton clase="buttonLink" />
        <LogoutButton />
      </header>
    );
  } else if (current === "productos") {
    return (
      <header className="header">
      <PrivateComponent roleList={['Administrador']}>
        <UsersButton clase="buttonLink" />
      </PrivateComponent>
        <SalesButton clase="buttonLink" />
        <ProductButton clase="currentButtonLink" />
        <LogoutButton />
      </header>
    );
  }
};

export default Header;
