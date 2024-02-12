import React from "react";
import aam from "./Assets/aam.jpeg";
import aamcert from "./Assets/aamcert.jpeg";
import ntc from "./Assets/ntc.jpeg";

const Awards = () => {
  const awards = [
    {
      id: 1,
      img: aam,
      alt: "Army Achievement Award",
      height: 300,
    },
    {
      id: 2,
      img: aamcert,
      alt: "Army Achievement Award Document",
      height: 300,
    },
    {
      id: 3,
      img: ntc,
      alt: "Chief Gram's award",
      height: 300,
    },
  ];
  return (
    <>
      <div className="awards-wrapper">
        {awards.map((award) => (
          <div key={award.id} className="award">
            <img src={award.img} alt={award.alt} height={"300"} />
          </div>
        ))}
      </div>
    </>
  );
};
export default Awards;
