import React from "react";
import Button from "../Button";

/*
   Find the bug in this component
  
   When the user enters a todo into the text field and then clicks the "add button"
   a todo should be added to the list of todos.
*/
const secretToken = '0S09EPP1DaA8cQzlW9Fl3vTni7YrRQKxGB6rexqmd7CMxv1SYxBXGPGggeFq'
const seasonId = '18369'
export default function Challenge() {
  const [sort, setSort] = React.useState("AZ");
  const [standings, setStandings] = React.useState(null);

  React.useEffect(() => {
    try {
      fetch(`https://soccer.sportmonks.com/api/v2.0/standings/season/${seasonId}?api_token=${secretToken}`).then(
        (response) => {
          response.json().then((json) => {
            const standingsData = json?.data[0]?.standings?.data
            setStandings(standingsData)
          });
        }
      );
    } catch (e) {
      console.log(e);
    }
  }, []);

  console.log('standings data', standings)
  return (
    <>
      <div className="mb-2">
        <label htmlFor="sort" className="mr-2">Sort:</label>
        <select id="sort" className="border border-gray-400 rounded px-2 py-1" onChange={(e) => setSort(e.target.value)} value={sort}>
          <option value="AZ">Position - AZ</option>
          <option value="ZA">Position - ZA</option>
          <option value="GD-AZ">Goal Differential - AZ</option>
          <option value="GD-ZA">Goal Differential - ZA</option>
        </select>
      </div>
      <div>
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th /> {/* NO HEADING NEEDED FOR POSITION*/}
              <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Team</th>
              <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">MP</th>
              <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">W</th>
              <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">D</th>
              <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">L</th>
              <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">GF</th>
              <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">GA</th>
              <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">GD</th>
              <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Pts</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
                  {/* YOUR CODE TO RENDER TABLE CONTENTS HERE */}
                  <SampleTableRow />
          </tbody>

        </table>
      </div>
    </>
  );
}

function SampleTableRow() {
  return (
    <tr>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">1</td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Chicago Bulls</td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">38</td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">34</td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">2</td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">2</td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-green-500 ">65</td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-red-500">10</td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">+55</td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">104</td>
    </tr>
  )
}