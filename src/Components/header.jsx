import DoneButton from "./doneButton";
import Search from "./search";
import UsersButton from "./usersButton";
import ProductButton from "./productButton";
import SalesButton from "./salesButton";

const Header = ({ current }) => {
  if (current === "usuarios") {
    return (
      <header className="header">
        <Search />
        <UsersButton clase="currentButtonLink" />
        <SalesButton clase="buttonLink" />
        <ProductButton clase="buttonLink" />
        <DoneButton />
      </header>
    );
  } else if (current === "ventas") {
    return (
      <header className="header">
        <Search />
        <UsersButton clase="buttonLink" />
        <SalesButton clase="currentButtonLink" />
        <ProductButton clase="buttonLink" />
        <DoneButton />
      </header>
    );
  } else if (current === "productos") {
    return (
      <header className="header">
        <Search />
        <UsersButton clase="buttonLink" />
        <SalesButton clase="buttonLink" />
        <ProductButton clase="currentButtonLink" />
        <DoneButton />
      </header>
    );
  }
  else if (current === "AddVenta") {
    return (
      <header className="header">
        <Search />
        <UsersButton clase="buttonLink" />
        <SalesButton clase="currentButtonLink" />
        <ProductButton clase="buttonLink" />
        <DoneButton />
      </header>
    );
  } 
};

export default Header;
