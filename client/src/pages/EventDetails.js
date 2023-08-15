import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Event Details</h2>
      <p>Event ID: {id}</p>
    </div>
  );
};

export default EventDetails;
