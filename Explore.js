import React, { useState } from 'react';

const ExploreFlights = () => {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [flights, setFlights] = useState([]);

  const handleDepartureChange = (e) => {
    setDeparture(e.target.value);
  };

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleExplore = (e) => {
    e.preventDefault();
    // Perform the explore flights logic here
    // For demonstration purposes, we're just setting dummy flights
    const dummyFlights = [
      { airline: 'Airline A', flightNumber: 'A123', price: '$100' },
      { airline: 'Airline B', flightNumber: 'B456', price: '$150' },
      { airline: 'Airline C', flightNumber: 'C789', price: '$200' },
    ];
    setFlights(dummyFlights);
  };

  return (
    <div>
      <h2>Explore Flights</h2>
      <form onSubmit={handleExplore}>
        <div>
          <label htmlFor="departure">Departure:</label>
          <input
            type="text"
            id="departure"
            value={departure}
            onChange={handleDepartureChange}
          />
        </div>
        <div>
          <label htmlFor="destination">Destination:</label>
          <input
            type="text"
            id="destination"
            value={destination}
            onChange={handleDestinationChange}
          />
        </div>
        <button type="submit">Explore</button>
      </form>
      {flights.length > 0 && (
        <div>
          <h3>Available Flights</h3>
          <ul>
            {flights.map((flight, index) => (
              <li key={index}>
                <div>
                  <strong>Airline:</strong> {flight.airline}
                </div>
                <div>
                  <strong>Flight Number:</strong> {flight.flightNumber}
                </div>
                <div>
                  <strong>Price:</strong> {flight.price}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ExploreFlights;
