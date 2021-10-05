import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
import "Styles/Formproduct.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={["/ventas/agregarventa", "/ventas"]}>
            <Switch>
              <Route path="/ventas/agregarventa">
                <AddSale />
              </Route>
              <Route path="/ventas">
                <Sales />
              </Route>
            </Switch>
          </Route>
          <Route path={["/productos", "/productos/agregarproducto"]}>
            <Switch>
              <Route path="/productos/agregarproducto">
                <AddProducts />
              </Route>
              <Route path="/productos">
                <Products />
              </Route>
            </Switch>
          </Route>
          <Route path="/goto">
            <Redirect />
          </Route>
          <Route path="/usuarios">
            <Users />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
