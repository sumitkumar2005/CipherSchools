import React from 'react';

const WeatherSummary = () => {
  const date = new Date();
  const options = { weekday: 'long', day: 'numeric', month: 'long' };
  const formattedDate = date.toLocaleDateString('en-US', options);

  return (
    <>
    <div className="date">
    <h1>34&deg; C | Sunny</h1>
    </div>
     
    </>
  );
}

export default WeatherSummary;
