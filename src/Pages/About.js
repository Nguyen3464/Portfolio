import React from "react";
import Certifications from "../Components/About/Certifications/Certifications";
import Awards from "../Components/About/Awards/Awards";
import Loc from "../Components/About/Loc/Loc";

export const About = () => {
  return (
    <>
      <div className="container6">
        <Certifications />
        <Awards />
        <Loc />
      </div>
    </>
  );
};
