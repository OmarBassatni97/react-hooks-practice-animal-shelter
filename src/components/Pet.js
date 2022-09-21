import React from "react";

function Pet({
  id,
  name,
  type,
  age,
  weight,
  petGender,
  isAdopted,
  handleAdoption,
}) {
  const gender = {
    male: "♂",
    female: "♀",
  };
  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {gender[petGender]} {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        {!isAdopted ? (
          <button
            className="ui primary button"
            onClick={() => handleAdoption(id)}
          >
            Adopt pet
          </button>
        ) : (
          <button className="ui disabled button">Already adopted</button>
        )}
      </div>
    </div>
  );
}

export default Pet;
