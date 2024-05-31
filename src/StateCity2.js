import React, { useState } from "react";

const citiesData = [
  { state: "Gujarat", cities: ["Ahmedabad", "Vadodara"] },
  { state: "Rajasthan", cities: ["Udaipur", "Jaipur"] },
  { state: "Goa", cities: ["Panaji", "Madgaon"] },
];

const StateCity2 = () => {
  const [selectedState, setSelectedState] = useState("");

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  const selectedCities =
    citiesData.find((item) => item.state === selectedState)?.cities || [];

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
      {selectedState && selectedCities.length > 0 && (
        <div>
          <h3>Cities in {selectedState}:</h3>
          <ul>
            {selectedCities.map((city, index) => (
              <li key={index}>{city}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default StateCity2;
