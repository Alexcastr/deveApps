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
import PrivateRoute from "Components/PrivateRoute";

function App() {
  const [userData, setUserData] = useState({});

  return (
    <Auth0Provider
      domain="deveapps.us.auth0.com"
      clientId="bIGQtLlA6nqcsJYJOvQYTUer2QTTOVxj"
      redirectUri={"https://guarded-cliffs-20567.herokuapp.com/goto"}
      audience="api-autenticacion-deveapps"
    >
      <div className="App">
        <UserContext.Provider value={{ userData, setUserData }}>
          <Router>
            <Switch>
              <Route path={["/ventas/agregarventa", "/ventas"]}>
                <Switch>
                  <Route path="/ventas/agregarventa">
                    <PrivateRoute>
                      <PrivateR roleList={["Administrador", "Vendedor"]}>
                        <AddSale />
                      </PrivateR>
                    </PrivateRoute>
                  </Route>
                  <Route path="/ventas">
                    <PrivateRoute>
                      <PrivateR roleList={["Vendedor", "Administrador"]}>
                        <Sales />
                      </PrivateR>
                    </PrivateRoute>
                  </Route>
                </Switch>
              </Route>
              <Route path={["/productos", "/productos/agregarproducto"]}>
                <Switch>
                  <Route path="/productos/agregarproducto">
                    <PrivateRoute>
                      <PrivateR roleList={["Administrador"]}>
                        <AddProducts />
                      </PrivateR>
                    </PrivateRoute>
                  </Route>
                  <Route path="/productos">
                    <PrivateRoute>
                      <PrivateR roleList={["Administrador", "Vendedor"]}>
                        <Products />
                      </PrivateR>
                    </PrivateRoute>
                  </Route>
                </Switch>
              </Route>
              <Route path="/goto">
                <Redirect />
              </Route>
              <Route path="/usuarios">
                <PrivateRoute>
                  <PrivateR roleList={["Administrador"]}>
                    <Users />
                  </PrivateR>
                </PrivateRoute>
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
