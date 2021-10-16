import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import AddSale from "pages/AddSale";
import Sales from "pages/Sales";
import Redirect from "pages/Redirect";
import Login from "pages/Login";
import Users from "pages/Users";
import Products from "pages/Products";
import AddProducts from "pages/addProducts";
import "Styles/App.css";
import "Styles/Header.css";
import "Styles/navButtons.css";
import "Styles/Body.css";
import "Styles/formVentas.css";
import "Styles/formProduct.css";
import "Styles/EntryStyles.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserContext } from "context/userContext";
import PrivateR from "Components/PrivateR";

function App() {
  const [userData, setUserData] = useState([]);

  return (
    <Auth0Provider
      domain="deveapps.us.auth0.com"
      clientId="bIGQtLlA6nqcsJYJOvQYTUer2QTTOVxj"
      redirectUri={"http://localhost:3000/goto"}
      audience="api-autenticacion-deveapps"
    >
      <div className="App">
        <UserContext.Provider value={{ userData, setUserData }}>
          <Router>
            <Switch>
              <Route path={["/ventas/agregarventa", "/ventas"]}>
                <Switch>
                  <Route path="/ventas/agregarventa">
                    <PrivateR roleList={["Administrador", "Vendedor"]}>
                      <AddSale />
                    </PrivateR>
                  </Route>
                  <Route path="/ventas">
                    <PrivateR roleList={["Vendedor", "Administrador"]}>
                      <Sales />
                    </PrivateR>
                  </Route>
                </Switch>
              </Route>
              <Route path={["/productos", "/productos/agregarproducto"]}>
                <Switch>
                  <Route path="/productos/agregarproducto">
                    <PrivateR roleList={["Administrador"]}>
                      <AddProducts />
                    </PrivateR>
                  </Route>
                  <Route path="/productos">
                    <PrivateR roleList={["Administrador", "Vendedor"]}>
                      <Products />
                    </PrivateR>
                  </Route>
                </Switch>
              </Route>
              <Route path="/goto">
                <Redirect />
              </Route>
              <Route path="/usuarios">
                <PrivateR roleList={["Administrador"]}>
                  <Users />
                </PrivateR>
              </Route>
              <Route path="/">
                <Login />
              </Route>
            </Switch>
          </Router>
        </UserContext.Provider>
      </div>
    </Auth0Provider>
  );
}

export default App;
