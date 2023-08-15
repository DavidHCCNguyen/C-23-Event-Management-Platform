// This is a simplified example of an API utility
const api = {
    getEvents: async () => {
      // Simulate fetching events from the server
      return [
        { id: 1, name: 'Conference A', date: '2023-08-15', location: 'City A' },
        { id: 2, name: 'Workshop B', date: '2023-08-20', location: 'City B' },
        // ... more events
      ];
    },
  };
  
  export default api;