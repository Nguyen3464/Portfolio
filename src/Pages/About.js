import React from "react";
import certjs from "../Assets/certjs.jpeg"
import certhtml from "../Assets/certhtml.jpeg"
import certcss from "../Assets/certcss.jpeg"
import aam from "../Assets/aam.jpeg"
import aamcert from "../Assets/aamcert.jpeg"
import ntc from "../Assets/ntc.jpeg"
import loc1 from "../Assets/loc1.jpeg"
import loc2 from "../Assets/loc2.jpeg"
import learn from "../Assets/learn.png"

export const About = () => {
  return (
    <>
      <div className="certs-wrapper">
        <div className="certs">
          <img src={learn} alt="learn academy certification"/>
        </div>
        <div className="certs">
          <img src={certjs} alt=" Javascript Certification" />
        </div>
        <div className="certs">
          <img src={certhtml} alt=" Html Certification" height="300"/>
        </div>
        <div className="certs">
          <img src={certcss} alt=" CSS Certification" height="300"/>
        </div>
      </div>

      <div className="awards-wrapper">
        <div className="awards">
          <img src={aam} alt="Army Achievement Award" height="300"/>
        </div>
        <div className="awards">
          <img src={aamcert} alt="Army Achievement Award Document" height="300"/>
        </div>
        <div className="awards">
          <img src={ntc} alt="Chief Gram's award" height="300"/>
        </div>
      </div>

      <div className="loc-wrapper">
        <div className="loc">
          <img src={loc1} alt="" height="300"/>
        </div>
        <div className="loc">
          <img src={loc2} alt="" height="300"/>
        </div>
      </div>

      <div className="about-section1">Introduction</div>
      <div className="about-section2">King</div>
      <div className="about-section3">Warrior</div>
      <div className="about-section4">Magician</div>
      <div className="about-section5">Lover</div>
    </>
  );
};
