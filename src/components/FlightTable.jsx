import React, { useState, useEffect } from "react";
import axios from "axios";

const FlightTable = () => {
  const [flights, setFlights] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const recordsPerPage = 15;

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get(
          "http://api.aviationstack.com/v1/flights?access_key=db443eb530d94a91d3de69e6abf2d3d3"
        );
        const now = new Date();
        const next24Hours = new Date(now.getTime() + 24 * 60 * 60 * 1000);

        const filteredFlights = response.data.data.filter((flight) => {
          const departureTime = new Date(flight.departure.estimated);
          return departureTime >= now && departureTime <= next24Hours;
        });

        setFlights(filteredFlights);
        setLoading(false);
      } catch (error) {
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchFlights();
  }, []);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const displayedFlights = flights.slice(
    currentPage * recordsPerPage,
    (currentPage + 1) * recordsPerPage
  );

  return (
    <div className="bg-slate-50 p-6 rounded-lg shadow-lg mt-8 mx-4">
      <table className="min-w-full border-collapse block md:table bg-white boder rounded-md ">
        <thead className="block md:table-header-group">
          <tr className=" border-gray-200 md:border-none block md:table-row ">
            <th className="bg-gray-100 p-2 text-left font-bold text-gray-600 md:border md:border-gray-300 block md:table-cell">
              Flight Number
            </th>
            <th className=" bg-gray-100 p-2 text-left font-bold text-gray-600 md:border md:border-gray-300 block md:table-cell">
              Airline
            </th>
            <th className="bg-gray-100 p-2 text-left font-bold text-gray-600 md:border md:border-gray-300 block md:table-cell">
              Departure Airport
            </th>
            <th className="bg-gray-100 p-2 text-left font-bold text-gray-600 md:border md:border-gray-300 block md:table-cell">
              Departure Time
            </th>
            <th className="bg-gray-100 p-2 text-left font-bold text-gray-600 md:border md:border-gray-300 block md:table-cell">
              Arrival Airport
            </th>
            <th className="bg-gray-100 p-2 text-left font-bold text-gray-600 md:border md:border-gray-300 block md:table-cell">
              Arrival Time
            </th>
            <th className="bg-gray-100 p-2 text-left font-bold text-gray-600 md:border md:border-gray-300 block md:table-cell">
              Flight Date
            </th>
            <th className="bg-gray-100 p-2 text-left font-bold text-gray-600 md:border md:border-gray-300 block md:table-cell">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {displayedFlights.map((flight) => (
            <tr
              key={flight.flight.iata}
              className="border border-gray-300 md:border-none block md:table-row"
            >
              <td className="p-2 text-gray-800 md:border md:border-gray-300 block md:table-cell">
                {flight.flight.iata}
              </td>
              <td className="p-2 text-gray-800 md:border md:border-gray-300 block md:table-cell">
                {flight.airline.name}
              </td>
              <td className="p-2 text-gray-800 md:border md:border-gray-300 block md:table-cell">
                {flight.departure.airport}
              </td>
              <td className="p-2 text-gray-800 md:border md:border-gray-300 block md:table-cell">
                {new Date(flight.departure.estimated).toLocaleTimeString()}
              </td>
              <td className="p-2 text-gray-800 md:border md:border-gray-300 block md:table-cell">
                {flight.arrival.airport}
              </td>
              <td className="p-2 text-gray-800 md:border md:border-gray-300 block md:table-cell">
                {new Date(flight.arrival.estimated).toLocaleTimeString()}
              </td>
              <td className="p-2 text-gray-800 md:border md:border-gray-300 block md:table-cell">
                {new Date(flight.departure.estimated).toLocaleDateString()}
              </td>
              <td className="p-2 text-gray-800 md:border md:border-gray-300 block md:table-cell">
                {flight.flight_status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 0}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={displayedFlights.length < recordsPerPage}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FlightTable;
