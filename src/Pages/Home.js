import React from "react";
import Section1 from "../Components/Home/Section1/Section1";
import Section2 from "../Components/Home/Section2/Section2";
import Section3 from "../Components/Home/Section3/Section3"
import Section4 from "../Components/Home/Section4/Section4";
import Section5 from "../Components/Home/Section5/Section5";

export const Home = () => {
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />

 

      {/* <div className="section6">add front end imagry</div> */}
      {/* <div className="back-of-house">
        <div className="boh-intro-container">
          <div className="boh-intro-image-box"></div>
          <div className="boh-intro-text-box">
            <p>
            As a backend developer, I employ the Rails MVC architecture for creating and managing database models. I use JavaScript and Ruby on Rails in facilitating database integrations, with an emphasis on PostgreSQL for database design, querying, and optimization. I prioritize data integrity and reliability with Test-driven development practices using Jest and RSpec. In API development I utilize Postman for verification of data connectivity, while applying RESTful routes methodologies.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};
