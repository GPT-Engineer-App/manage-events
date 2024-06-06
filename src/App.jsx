import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import CreateEvent from "./pages/CreateEvent.jsx";
import Events from "./pages/Events.jsx";
import BookTickets from "./pages/BookTickets.jsx";
import { useState } from "react";

function App() {
  const [events, setEvents] = useState([]);
  const [bookings, setBookings] = useState([]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  const addBooking = (booking) => {
    setBookings([...bookings, booking]);
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/create-event" element={<CreateEvent addEvent={addEvent} />} />
        <Route path="/events" element={<Events events={events} />} />
      <Route path="/book-tickets/:eventName" element={<BookTickets addBooking={addBooking} />} />
      </Routes>
    </Router>
  );
}

export default App;
