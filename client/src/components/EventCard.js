import React from 'react';

// Showing what the EventCard component looks like
const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <h2>{event.name}</h2>
      <p>Date: {event.date}</p>
      <p>Location: {event.location}</p>
      <button>Book Now</button>
    </div>
  );
};

export default EventCard;