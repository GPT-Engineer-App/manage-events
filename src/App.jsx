import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import CreateEvent from "./pages/CreateEvent.jsx";
import Events from "./pages/Events.jsx";
import { useState } from "react";

function App() {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/create-event" element={<CreateEvent addEvent={addEvent} />} />
        <Route path="/events" element={<Events events={events} />} />
      </Routes>
    </Router>
  );
}

export default App;
