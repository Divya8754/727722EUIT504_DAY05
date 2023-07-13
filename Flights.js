import React, { useState } from 'react';

const FlightForm = () => {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');

  // Sample list of departure and destination options
  const flightOptions = [
    { id: 1, name: 'New York' },
    { id: 2, name: 'London' },
    { id: 3, name: 'Paris' },
    { id: 4, name: 'Tokyo' },
    // Add more options as needed
  ];

  const handleDepartureChange = (e) => {
    setDeparture(e.target.value);
  };

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  return (
    <div>
      <label>Departure:</label>
      <select value={departure} onChange={handleDepartureChange}>
        <option value="">Select Departure</option>
        {flightOptions.map((option) => (
          <option key={option.id} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>

      <label>Destination:</label>
      <select value={destination} onChange={handleDestinationChange}>
        <option value="">Select Destination</option>
        {flightOptions.map((option) => (
          <option key={option.id} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FlightForm;
