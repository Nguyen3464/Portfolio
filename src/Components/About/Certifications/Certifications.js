import React from 'react'
import certjs from "./Assets/certjs.jpeg";
import certhtml from "./Assets/certhtml.jpeg";
import certcss from "./Assets/certcss.jpeg";
import learn from "./Assets/learn.png";
import certreact from "./Assets/react.jpeg";

const Certifications = () => {
    const certifications = [
        {
          id: 1,
          image: learn,
          alt: "Learn Academy Certification",
          height: 300
        },
        {
          id: 2,
          image: certreact,
          alt: "React Certification",
          height: 300,
        },
        {
          id: 3,
          image: certjs,
          alt: "JavaScript Certification",
          height: 300
        },
        {
          id: 4,
          image: certhtml,
          alt: "HTML Certification",
          height: 300,
        },
        {
          id: 5,
          image: certcss,
          alt: "CSS Certifiation",
          height: 300,
        },
      ];
  return (
    <div className="certs-wrapper">
    {certifications.map((cert) => (
      <div key={cert.id} className="certs">
        <img src={cert.image} alt={cert.alt} height={cert.height} />
      </div>
    ))}
  </div>
  )
}
export default Certifications