import React, { useRef, useEffect } from "react";


const Section5 = () => {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;

    const handleWheel = (event) => {

      if (container.contains(event.target)) {
        container.scrollLeft += event.deltaY;
        event.preventDefault();
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    let touchStartX = 0;

    const handleTouchStart = (event) => {
      touchStartX = event.touches[0].clientX;
    };

    const handleTouchMove = (event) => {
      const touchEndX = event.touches[0].clientX;
      const deltaX = touchStartX - touchEndX;
      const scrollFactor = 0.1; 

      if (Math.abs(deltaX) > 10) {
        container.scrollLeft += deltaX * scrollFactor;
        event.preventDefault();
      }
    };

    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
    };
  }, [containerRef]);

  

    const lineItems = [
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
        "Incorporating comprehensive quality checks into the development process to deliver high-quality, maintainable code, ensuring robust software with minimal bugs and facilitating efficient future maintenance and updates."
    }
  ];

  return (
    <>
      <section className="section5">
        <div ref={containerRef} className="card-container">
          {lineItems.map((item, index) => (
            <div key={index} className={`card${index + 1}`}>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Section5;