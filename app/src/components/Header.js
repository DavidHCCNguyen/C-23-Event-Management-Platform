import React, { useState, useEffect } from 'react';
import EventList from '../components/EventList';
import api from '../utils/api';

// Showing what the Home component looks like
const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from the server using the api utility
    api.getEvents().then(data => setEvents(data));
  }, []);

  return (
    <div className="home-page">
      <h1>Upcoming Events</h1>
      <EventList events={events} />
    </div>
  );
};

export default Home;