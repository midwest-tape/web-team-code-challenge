import Challenge1 from "./challenges/Challenge1";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="text-gray-200">Hello CodeSandbox</h1>
        <div className="wrapper">
          <div className="nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/challenge1">Challenge 1</Link>
              </li>
            </ul>
          </div>
          <main className="main">
            <Switch>
              <Route path="/challenge1">
                <Challenge1 />
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
