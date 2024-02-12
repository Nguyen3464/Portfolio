import React from "react";
import useCarousel from "../../Hooks/useCarousel";

const Section3 = () => {
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
        "Translate design mockups into functional code. Implement features and while providing a smooth user experience through knowledge of JavaScript, CSS, HTML. Uitilize frameworks like React, Ruby on Rails and other libaries stream line production, and implementation of features. Understands UI archetitural principles for creating intuitive and visually appealing interface",
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
    },
  ];

  const { containerRef, groupedItems, bullets, controls } =
    useCarousel(lineItems);

  return (
    <>
      <header className="header">
        <h1>FrontEnd Development</h1>
      </header>
      <div className="section3">
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
      </div>
    </>
  );
};

export default Section3;
