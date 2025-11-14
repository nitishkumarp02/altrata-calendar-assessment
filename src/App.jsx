import React, { useState } from "react";
import Calendar from "./components/Calendar";
import "./index.css";

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleChange = (e) => {
    setSelectedDate(new Date(e.target.value));
  };

  return (
    <div className="app-center">
      <div className="text-center">
        <Calendar 
          date={selectedDate} 
          />
        <input
          type="date"
          onChange={handleChange}
          className="date-input"
        />
        <p style={{ color: "lightgray", fontSize: "0.7rem", marginTop: "1rem" }}>
          Selected Date: {selectedDate.toDateString().replace(" ", " - ")}
        </p>
      </div>
    </div>
  );
}

export default App;
