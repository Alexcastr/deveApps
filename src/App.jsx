import Sales from "pages/Sales";
import Login from "pages/Login";
import Users from "pages/Users";
import Products from "pages/Products";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "Styles/App.css";
import "Styles/Header.css";
import "Styles/navButtons.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/ventas">
            <Sales />
          </Route>
          <Route path="/usuarios">
            <Users />
          </Route>
          <Route path="/productos">
            <Products />
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
