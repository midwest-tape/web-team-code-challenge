import Challenge1 from "./challenges/Challenge1";
import Challenge2 from "./challenges/Challenge2";
import Challenge3 from "./challenges/Challenge3";
import Challenge4 from "./challenges/Challenge4";
import Challenge5 from "./challenges/Challenge5";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink as Link
} from "react-router-dom";
import Home from "./Home";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1 className="heading text-4xl">Midwest Tape Web Team</h1>
          <h2 className="sub-heading text-3xl">Code Challenge</h2>
        </header>
        <div className="wrapper">
          <ul className="nav">
            <li className="navItem">
              <Link
                to="/"
                className="link"
                activeClassName="active-link"
                exact="true"
              >
                Home
              </Link>
            </li>
            <li className="navItem">
              <Link
                to="/challenge1"
                className="link"
                activeClassName="active-link"
                exact="true"
              >
                Challenge 1
              </Link>
            </li>
            <li className="navItem">
              <Link
                to="/challenge2"
                className="link"
                activeClassName="active-link"
                exact="true"
              >
                Challenge 2
              </Link>
            </li>
            <li className="navItem">
              <Link
                to="/challenge3"
                className="link"
                activeClassName="active-link"
                exact="true"
              >
                Challenge 3
              </Link>
            </li>
            <li className="navItem">
              <Link
                to="/challenge4"
                className="link"
                activeClassName="active-link"
                exact="true"
              >
                Challenge 4
              </Link>
            </li>
            <li className="navItem">
              <Link
                to="/challenge5"
                className="link"
                activeClassName="active-link"
                exact="true"
              >
                Challenge 5
              </Link>
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
