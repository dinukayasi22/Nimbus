// src/FlightStatus.js
import React from 'react';

function FlightStatus() {
  return (
    <div className="bg-slate-50 p-6 rounded-lg shadow-lg mt-8 mx-4">
      <h2 className="text-lg font-semibold mb-4">Flight Status on Jun 26 2024</h2>
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Flight No</th>
            <th className="p-2">From</th>
            <th className="p-2">To</th>
            <th className="p-2">Estimated Departure Time</th>
            <th className="p-2">Actual Departure Time</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">UL 504</td>
            <td className="border p-2">London Heathrow, LHR</td>
            <td className="border p-2">Colombo, CMB</td>
            <td className="border p-2">21:30</td>
            <td className="border p-2">-</td>
            <td className="border p-2">Scheduled</td>
          </tr>
          {/* Add more rows as necessary */}
        </tbody>
      </table>
    </div>
  );
}

export default FlightStatus;
