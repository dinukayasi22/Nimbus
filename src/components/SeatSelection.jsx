import React, { useState } from 'react';

const Seat = ({ seatNumber, isSelected, onSelect }) => (
  <div
    className={`w-9 h-8 flex items-center justify-center cursor-pointer 
                ${seatNumber ? (isSelected ? 'bg-green-500' : 'bg-purple-400') : ''}
                ${seatNumber ? 'border border-gray-500' : ''}`}
    onClick={() => seatNumber && onSelect(seatNumber)}
  >
    {seatNumber}
  </div>
);

const SeatSelection = () => {
  // Adjusting the seat layout to match the uploaded image
  const seatLayout = [
    ['1A', '1B', null, null, '1C', '1D'],
    ['2A', '2B', null, null, '2C', '2D'],
    ['3A', '3B', null, null, '3C', '3D'],
    ['4A', '4B', null, null, '4C', '4D'],
    ['5A', '5B', null, null, '5C', '5D'],
    ['6A', '6B', null, null, '6C', '6D'],
    ['7A', '7B', null, null, '7C', '7D'],
    ['8A', '8B', null, null, '8C', '8D'],
    ['9A', '9B', null, null, '9C', '9D'],
    ['10A', '10B', '10C', '10D', '10E', '10F'],
    ['11A', '11B', '11C', '11D', '11E', '11F'],
    ['12A', '12B', '12C', '12D', '12E', '12F'],
    ['13A', '13B', '13C', '13D', '13E', '13F'],
    ['14A', '14B', '14C', '14D', '14E', '14F'],
    ['15A', '15B', '15C', '15D', '15E', '15F'],
  ];

  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSelect = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter(seat => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-1 gap-2 p-1 bg-gray-200 rounded-lg">
        {seatLayout.map((row, rowIndex) => (
          <div key={rowIndex} className="flex">
            {row.map((seat, seatIndex) => (
              <Seat
                key={seatIndex}
                seatNumber={seat}
                isSelected={selectedSeats.includes(seat)}
                onSelect={handleSelect}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeatSelection;
