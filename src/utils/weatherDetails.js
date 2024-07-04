import React from 'react';
import useAxiosFetch from './useAxiosFetch';

const weatherDetails = () => {
  const { data, loading, error } = useAxiosFetch('https://home.openweathermap.org/api_keys');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data ? (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};

export default weatherDetails;
