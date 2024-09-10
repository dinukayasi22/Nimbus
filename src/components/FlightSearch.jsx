import React, { useState } from 'react';

function FlightSearch() {
  const [isReturn, setIsReturn] = useState(false);

  const handleOneWayClick = () => {
    setIsReturn(false);
  };

  const handleReturnClick = () => {
    setIsReturn(true);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-8 mx-4 w-8/5">
      <div className="flex justify-center mb-6">
        <div className="flex bg-gray-200 p-1 rounded-full">
          <button
            className={`py-2 px-6 rounded-full ${!isReturn ? 'bg-blue-900 text-orange-400' : 'bg-transparent text-gray-500'}`}
            onClick={handleOneWayClick}
          >
            One way
          </button>
          <button
            className={`py-2 px-6 rounded-full ${isReturn ? 'bg-blue-900 text-orange-400' : 'bg-transparent text-gray-500'}`}
            onClick={handleReturnClick}
          >
            Return
          </button>
        </div>
      </div>

      <div className="mt-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-gray-600">From</label>
            <input type="text" className="border rounded-lg py-2 px-3 mt-1" placeholder="From" />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600">To</label>
            <input type="text" className="border rounded-lg py-2 px-3 mt-1" placeholder="To" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="flex flex-col">
            <label className="text-gray-600">Departure</label>
            <input type="date" className="border rounded-lg py-2 px-3 mt-1" />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600">Passenger / Class</label>
            <select className="border rounded-lg py-2 px-3 mt-1">
              <option>Economy</option>
              <option>Business</option>
            </select>
          </div>
        </div>

        {isReturn && (
          <div className="flex flex-col mt-4">
            <label className="text-gray-600">Arrival</label>
            <input type="date" className="border rounded-lg py-2 px-3 mt-1" />
          </div>
        )}
      </div>

      <button className="bg-pink-200 text-pink-600 w-full py-2 mt-4 rounded-lg">
        Find Flights
      </button>
    </div>
  );
}

export default FlightSearch;
