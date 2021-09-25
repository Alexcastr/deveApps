import Index from "pages/Index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "Styles/App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Index />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
