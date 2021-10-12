import UsersButton from "./usersButton";
import ProductButton from "./productButton";
import SalesButton from "./salesButton";
import LogoutButton from "./LogoutButton";
const Header = ({ current }) => {
  if (current === "usuarios") {
    return (
      <header className="header">
        <UsersButton clase="currentButtonLink" />
        <SalesButton clase="buttonLink" />
        <ProductButton clase="buttonLink" />
        <LogoutButton />
      </header>
    );
  } else if (current === "ventas") {
    return (
      <header className="header">
        <UsersButton clase="buttonLink" />
        <SalesButton clase="currentButtonLink" />
        <ProductButton clase="buttonLink" />
        <LogoutButton />
      </header>
    );
  } else if (current === "productos") {
    return (
      <header className="header">
        <UsersButton clase="buttonLink" />
        <SalesButton clase="buttonLink" />
        <ProductButton clase="currentButtonLink" />
        <LogoutButton />
      </header>
    );
  }
};

export default Header;
