import Challenge1 from "./challenges/Challenge1";
import Challenge2 from "./challenges/Challenge2";
import Challenge3 from "./challenges/Challenge3";
import Challenge4 from "./challenges/Challenge4";
import Challenge5 from "./challenges/Challenge5";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1 className="heading">Midwest Tape Web Team</h1>
          <h2 className="sub-heading">Code Challenge</h2>
        </header>
        <div className="wrapper">
          <ul className="nav">
            <li className="navItem">
              <Link to="/">Home</Link>
            </li>
            <li className="navItem">
              <Link to="/challenge1">Challenge 1</Link>
            </li>
            <li className="navItem">
              <Link to="/challenge2">Challenge 2</Link>
            </li>
            <li className="navItem">
              <Link to="/challenge3">Challenge 3</Link>
            </li>
            <li className="navItem">
              <Link to="/challenge4">Challenge 4</Link>
            </li>
            <li className="navItem">
              <Link to="/challenge5">Challenge 5</Link>
            </li>
          </ul>
          <main className="main">
            <Switch>
              <Route path="/challenge1">
                <Challenge1 />
              </Route>
              <Route path="/challenge2">
                <Challenge2 />
              </Route>
              <Route path="/challenge3">
                <Challenge3 />
              </Route>
              <Route path="/challenge4">
                <Challenge4 />
              </Route>
              <Route path="/challenge5">
                <Challenge5 />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </main>
        </div>
      </div>
    </Router>
  );
}
