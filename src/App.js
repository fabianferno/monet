import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Home from "./pages/Home";
import "./assets/scss/index.scss";

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
