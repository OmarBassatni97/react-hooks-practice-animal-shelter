import React from "react";

import Pet from "./Pet";

function PetBrowser({ pets, handleAdoption }) {
  return (
    <div className="ui cards">
      {pets.map((pet) => {
        return (
          <Pet
            key={pet.id}
            id={pet.id}
            name={pet.name}
            age={pet.age}
            weight={pet.weight}
            type={pet.type}
            petGender={pet.gender}
            isAdopted={pet.isAdopted}
            handleAdoption={handleAdoption}
          />
        );
      })}
    </div>
  );
}

export default PetBrowser;
