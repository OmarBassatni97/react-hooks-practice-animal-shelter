import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);

  const fetchData = async (endpoint) => {
    const response = await fetch(`http://localhost:3001/pets${endpoint}`);
    const data = await response.json();
    setPets(data);
  };

  const handleFilteredData = (e) => {
    e.preventDefault();
    if (e.target.value === "all") fetchData("");
    else fetchData(`?type=${e.target.value}`);
  };

  const handleAdoption = (id) => {
    const adoptedPets = pets.map((pet) => {
      if (pet.id === id) {
        return { ...pet, isAdopted: true };
      } else return pet;
    });
    setPets(adoptedPets);
    console.log(id);
  };

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters
              findPets={() => fetchData("")}
              onFilter={handleFilteredData}
            />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} handleAdoption={handleAdoption} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
