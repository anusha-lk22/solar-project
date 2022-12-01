import React, { useState } from "react";
import { weights } from "./weights.json";
import Earth from "./assets/images/earth.png";
import Jupiter from "./assets/images/jupiter.png";
import Mars from "./assets/images/mars.png";
import Mercury from "./assets/images/mercury.png";
import Moon from "./assets/images/moon.png";
import Neptune from "./assets/images/neptune.png";
import Pluto from "./assets/images/pluto.png";
import Saturn from "./assets/images/saturn.png";
import Uranus from "./assets/images/uranus.png";
import Venus from "./assets/images/venus.png";

function Planets() {
  const [planet, setPlanet] = useState({ mass: 45, gravity: 9.8 });
  const [result, setResult] = useState(0);
  const handleClick = () => {
    setResult(planet.mass * planet.gravity);
  };
  return (
    <div>
      <h1 className="text-center text-5xl text-orange-500 mt-10 text-shadow-lg">
        Calculate a weight of an object on a planet
      </h1>
      <div className="mt-10 text-center">
        <input
          className="p-3 border border-blue-500 rounded-lg"
          type="number"
          id="mass"
          value={planet.mass}
          onChange={(e) =>
            setPlanet((prev) => ({ ...prev, mass: parseFloat(e.target.value) }))
          }
          placeholder="Mass in Kilogram"
        />
        <select
          id="select"
          className="p-3 border border-blue-500 rounded-lg ml-5"
          value={planet.gravity}
          onChange={(e) =>
            setPlanet((prev) => ({
              ...prev,
              gravity: parseFloat(e.target.value),
            }))
          }
        >
          {weights.map((item) => {
            return (
              <option key={item.id} value={item.gravity}>
                {item.name}
              </option>
            );
          })}
        </select>
        <button
          className="p-3 ml-4 border border-blue-500 rounded-lg"
          onClick={handleClick}
        >
          Calculate weight
        </button>

        <div className="flex justify-center mt-10">
          <div>
            {planet.gravity === 9.8 ? (
              <img src={Earth} className="max-w-full" />
            ) : planet.gravity === 2.528 ? (
              <img src={Jupiter} className="max-w-full" />
            ) : planet.gravity === 0.379 ? (
              <img src={Mars} className="max-w-full" />
            ) : planet.gravity === 0.377 ? (
              <img src={Mercury} className="max-w-full" />
            ) : planet.gravity === 0.1657 ? (
              <img src={Moon} className="max-w-full" />
            ) : planet.gravity === 1.137 ? (
              <img src={Neptune} className="max-w-full" />
            ) : planet.gravity === 0.063 ? (
              <img src={Pluto} className="max-w-full" />
            ) : planet.gravity === 1.065 ? (
              <img src={Saturn} className="max-w-full" />
            ) : planet.gravity === 0.886 ? (
              <img src={Uranus} className="max-w-full" />
            ) : planet.gravity === 0.905 ? (
              <img src={Venus} className="max-w-full" />
            ) : (
              ""
            )}
          </div>
          <div className="text-blue-500 text-lg p-20 font-bold" id="result">
            The weight of the object on Earth is: {result}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Planets;
