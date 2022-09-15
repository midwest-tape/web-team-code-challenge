import React from "react";
import { ChevronUpIcon, ChevronUpDownIcon } from '@heroicons/react/24/solid'
import {standingsData} from './standingsData'
/*
   Find the bug in this component
  
   When the user enters a todo into the text field and then clicks the "add button"
   a todo should be added to the list of todos.
*/
export default function Challenge() {
  console.log('standings data', standingsData)
  return (
    <div className="border border-gray-50 rounded-xl overflow-hidden shadow-xl">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th className="sr-only">position</th>{/* NO HEADING NEEDED FOR POSITION*/}
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
            <SampleTableRow/> 
          </tbody>
        </table>
        </div>
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

      