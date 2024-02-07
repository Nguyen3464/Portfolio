import React from "react";
// import backend from "./Assets/backend-image.png"

const Section4 = () => {
  return (
    <>

      <div className="Section4">
        <header className="backend">
            <h1>Backend Development</h1>
        </header>
        <section>
          <div className="container">
            <p>
              As a backend developer, I employ the Rails MVC architecture for
              creating and managing database models. I use JavaScript and Ruby
              on Rails in facilitating database integrations, with an emphasis
              on PostgreSQL for database design, querying, and optimization. I
              prioritize data integrity and reliability with Test-driven
              development practices using Jest and RSpec. In API development I
              utilize Postman for verification of data connectivity, while
              applying RESTful routes methodologies.
            </p>
            {/* <img src={backend} className="backend-image" alt=""/> */}
          </div>
        </section>
      </div>
    </>
  );
};
export default Section4;
