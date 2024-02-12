import React from "react";
import loc1 from "./Assets/loc1.jpeg";
import loc2 from "./Assets/loc2.jpeg";

const Loc = () => {
  const locs = [
    {
      id: 1,
      img: loc1,
      alt: "",
      height: 300,
    },
    {
      id: 2,
      img: loc2,
      alt: "",
      height: 300,
    },
  ];
  return (
    <>
      <div className="loc-wrapper">
        {locs.map((loc) => (
          <div key={loc.id} className="loc">
            <img src={loc.img} alt={loc.alt} height={loc.height} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Loc;
