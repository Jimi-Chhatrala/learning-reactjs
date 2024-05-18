import React, { useState } from "react";

const citiesData = {
  Gujarat: ["Ahmedabad", "Vadodara"],
  Rajasthan: ["Udaipur", "Jaipur"],
  Goa: ["Panaji", "Madgaon"],
};

const StateCity = () => {
  const [selectedState, setSelectedState] = useState("");

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  return (
    <div>
      <label htmlFor="state-select">Select a state:</label>
      <select
        id="state-select"
        value={selectedState}
        onChange={handleStateChange}
      >
        <option value="">Select State</option>
        <option value="Gujarat">Gujarat</option>
        <option value="Rajasthan">Rajasthan</option>
        <option value="Goa">Goa</option>
      </select>
      {selectedState && (
        <div>
          <h3>Cities in {selectedState}:</h3>
          <ul>
            {citiesData[selectedState].map((city, index) => (
              <li key={index}>{city}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default StateCity;
