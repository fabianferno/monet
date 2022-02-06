import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/scss/index.scss";

import Landing from "./pages/Landing";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
