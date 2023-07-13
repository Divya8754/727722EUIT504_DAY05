import React from 'react';

const Flights = () => {
  const flightRoutes = [
    { id: 1, departure: 'New York', destination: 'London', price: 500 },
    { id: 2, departure: 'London', destination: 'Paris', price: 300 },
    { id: 3, departure: 'New York', destination: 'Paris', price: 600 },
    { id: 4, departure: 'Paris', destination: 'Tokyo', price: 800 },
    // Add more routes as needed
  ];

  return (
    <div>
      <h2>Flight Routes</h2>
      <table>
        <thead>
          <tr>
            <th>Departure</th>
            <th>Destination</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {flightRoutes.map((route) => (
            <tr key={route.id}>
              <td>{route.departure}</td>
              <td>{route.destination}</td>
              <td>{route.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Flights;
