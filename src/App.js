import Challenge1 from "./challenges/Challenge1";
import Challenge2 from "./challenges/Challenge2";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink as Link
} from "react-router-dom";
import Home from "./Home";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <div className="App text-gray-800">
        <header className="text-center mb-4">
          <h1 className="text-4xl">Midwest Tape Web Team</h1>
          <h2 className="text-3xl text-gray-700">Code Challenge</h2>
        </header>
        <div className="flex flex-row">
          <ul className="px-6">
            <li className="mb-2">
              <Link
                to="/"
                className="pb-0.5 text-blue-600 hover:text-blue-800 whitespace-nowrap"
                activeClassName="border-b border-blue-600 border-solid hover:border-blue-800"
                exact={true}
              >
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/challenge1"
                className="pb-0.5 text-blue-600 hover:text-blue-800 whitespace-nowrap"
                activeClassName="border-b border-blue-600 border-solid hover:border-blue-800"
                exact={true}
              >
                Challenge 1
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="/challenge2"
                className="pb-0.5 text-blue-600 hover:text-blue-800 whitespace-nowrap"
                activeClassName="border-b border-blue-600 border-solid hover:border-blue-800"
                exact={true}
              >
                Challenge 2
              </Link>
            </li>
          </ul>
          <main className="px-8">
            <Routes>
              <Route path="/challenge1" element={<Challenge1 />} />
              <Route path="/challenge2" element={<Challenge2 />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}
