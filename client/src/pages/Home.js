import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EventList from '../components/EventList';
import api from '../utils/api';
import Navbar from '../components/Navbar'; // Import the Navbar component

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from the server using the api utility
    api.getEvents().then(data => setEvents(data));
  }, []);

  return (
    <div className="home-page">
      <Navbar /> {/* Display the Navbar component */}
      <h2>Upcoming Events</h2>
      <EventList events={events} />
    </div>
  );
};

export default Home;
