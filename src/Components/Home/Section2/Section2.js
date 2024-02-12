import React from "react";
import headshot from "./Assets/headshot.jpeg";
import veg1 from "./Assets/veg1.png";

const Section2 = () => {
  return (
    <>
      <section className="section2">
        <div className="container11">
          <img className="headshot" src={headshot} alt="" />
        </div>
        <div className="container2">
          <img className="veg1" src={veg1} alt="" />
          <p>
            As a Front-end Developer im passionate about crafting user
            experiences with HTML, CSS, and React. My focus on responsive design
            ensures optimal interactions across devices. Proficient in modern
            front-end frameworks, I combine creativity and precision to deliver
            visually appealing and intuitive interfaces.
          </p>
        </div>
      </section>
    </>
  );
};

export default Section2;
