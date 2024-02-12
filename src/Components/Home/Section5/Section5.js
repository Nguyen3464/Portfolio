import React from "react";
import useCarousel from "../../Hooks/useCarousel";

const Section5 = () => {
  const lineItems2 = [
    {
      title: "JavaScript and Ruby on Rails",
      content:
        "Leveraging JavaScript and Ruby on Rails for smooth backend integration, maintaining effective communication between the server and database in dynamic web applications.",
    },
    {
      title: "Rails MVC Architecture",
      content:
        "Employing Rails MVC architecture for systematic creation and management of database models, enhancing backend development through structured organization.",
    },
    {
      title: "PostgreSQL Database Management",
      content:
        "Utilizing PostgreSQL for designing, querying, and optimizing databases, prioritizing data integrity and achieving optimal performance through efficient structures and advanced querying techniques.",
    },
    {
      title: "Test-Driven Development",
      content:
        "Implementing disciplined test-driven development practices using Jest and RSpec throughout the development process, ensuring the creation of reliable, robust, and easily maintainable software.",
    },
    {
      title: "API Development and Postman",
      content:
        "Demonstrating proficiency in API development through the application of RESTful routes methodologies, using Postman for meticulous verification of data connectivity. This ensures well-structured APIs adhering to industry standards, facilitating smooth data communication.",
    },
    {
      title: "Data Integrity and Reliability",
      content:
        "Emphasizing data integrity and reliability throughout the development lifecycle with strict validation checks, error handling mechanisms, and redundancy strategies for consistent and accurate information storage and retrieval.",
    },
    {
      title: "Quality Checks and Maintenance",
      content:
        "Incorporating comprehensive quality checks into the development process to deliver high-quality, maintainable code, ensuring robust software with minimal bugs and facilitating efficient future maintenance and updates.",
    },
  ];
  const { containerRef, groupedItems, bullets, controls } =
    useCarousel(lineItems2);

  return (
    <>
      <section className="section5">
        <div ref={containerRef} className="glide">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {groupedItems.map((group, groupIndex) => (
                <li key={groupIndex} className="glide__slide">
                  <div className="card-container">
                    {group.map((item, index) => (
                      <div key={index} className={`card${index + 1}`}>
                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
                      </div>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Controls */}
          <div className="glide__arrows" data-glide-el="controls">
            {controls}
          </div>

          {/* Bullets */}
          <div className="glide__bullets" data-glide-el="controls[nav]">
            {bullets}
          </div>
        </div>
      </section>
    </>
  );
};

export default Section5;
