
import Challenge from "./challenges/Challenge";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink as Link
} from "react-router-dom";
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
          <main className="px-8">
          <div className="mb-10">
            <p>
              The goal of this code challenge is to create a table that represents the ending standings of a recent.
            </p>
            <h2 className="font-bold text-xl">Requirements</h2>
            <ul className="list-disc list-inside">
              <li>Each Row in the table will represent a team and show the results for that team</li>
              <li>
                Each Row will display the following fields in the displayed order
                <ul className="list-disc list-inside ml-6">
                  <li>Position</li>
                  <li>Team Name</li>
                  <li>Matches Played (MP)</li>
                  <li>Wins (W)</li>
                  <li>Draws (D)</li>
                  <li>Losses (L)</li>
                  <li>Goals For (GF) -  color green</li>
                  <li>Goals Against (GA) - color red</li>
                  <li>Goal Differential (GD) - goals for - goals against</li>
                  <li>Points (Pts)</li>
                </ul>
              </li>
              <li>Review the standings data in the console to see console for the dynamic data to display</li>
            </ul>
          </div>
            <Routes>
              <Route path="/" element={<Challenge />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}