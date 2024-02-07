import React, { useRef, useEffect } from "react";


const Section3 = () => {
  const containerRef = useRef();

  // useEffect(() => {
  //   const handleWheel = (e) => {
  //     if (containerRef.current.contains(e.target)) {
  //       containerRef.current.scrollLeft += e.deltaY;
  //       e.preventDefault();
  //     }
  //   };

  //   document.addEventListener("wheel", handleWheel, { passive: false });

  //   return () => {
  //     document.removeEventListener("wheel", handleWheel);
  //   };
  // }, []);
  useEffect(() => {
    const container = containerRef.current;

    const handleWheel = (event) => {
      // Only scroll horizontally when the mouse wheel is over the container
      if (container.contains(event.target)) {
        container.scrollLeft += event.deltaY;
        event.preventDefault();
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    // Touch-based scrolling logic for mobile view
    let touchStartX = 0;

    const handleTouchStart = (event) => {
      touchStartX = event.touches[0].clientX;
    };

    const handleTouchMove = (event) => {
      const touchEndX = event.touches[0].clientX;
      const deltaX = touchStartX - touchEndX;

      // Check if the movement is mostly horizontal
      if (Math.abs(deltaX) > 10) {
        container.scrollLeft += deltaX;
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
      title: "Define the Project Scope",
      content:
        "Gather requirements from the client/stakeholders to understand the goals and objectives of the website. Identify the key features, functionality, and content that the website needs.",
    },
    {
      title: "Research and Competitive Analysis",
      content:
        "Conduct market research to understand industry-trends, and competitors. Analyze the competitors' sites to identify strengths and weaknesses.",
    },
    {
      title: "Plan Information Architecture",
      content:
        "Create a site map to outline the structure and hierarchy of the website. Organize content into categories and define navigation paths.",
    },
    {
      title: "Wireframing and Prototyping",
      content:
        "Create visual representations of page layouts and content placement through wireframes. Firm understanding of UX/UI design principles, knowledge of information architecture.",
    },
    {
      title: "Design Mockups",
      content:
        "Design the visual elements of the website, including colors, typography, images, and branding elements Collaboration with designers to maintain congruency of technical implementation and alignments with the design vision.",
    },
    {
      title: "Content Creation and Gathering",
      content:
        "Develop or gather content such as text, images, videos, and multimedia elements. Conduct content strategy research to refine both the user experience and technical aspects of the design.",
    },
    {
      title: "Development and Coding",
      content:
        "Translate design mockups into functional code. Implement features and while providing a smooth user experience through knowledge of JavaScript, CSS, HTML. Uitilize frameworks like React, Ruby on Rails and other libaries stream line production, and implementation of features. Understands UI archetitural principles for creating intuitive and visually appealing interface"
    },
    {
      title: "Testing and Quality Assurance",
      content:
        "Thoroughly test the website for functionality usability, and cross-browser compatibility Check for broken links, errors, and accessibility issues. Identify and fix bugs or descreptencies in the code. Knowledge of testing frameworks and methodologies JEST Rspec. Engages in gathering feedback to make iterative improvements.",
    },
    {
      title: "Responsive Design",
      content:
        "Ensure the website is responsive and adapts to various screen sizes and devices; desktop, tablet, mobile. Implementing responsive design involves using CSS media queries and flexible grids. Conducts testing and verification accross different devices to address responsiveness in order to provide reliable and adative design.",
    }

  ];

  return (
    <>
      <header className="header">
        <h1>FrontEnd Development</h1>
      </header>
      <section
        className="section3"
      >
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

export default Section3;
