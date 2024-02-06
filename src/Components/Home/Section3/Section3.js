import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import wood from "./Assets/wood.png"

const Section3 = () => {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
  });

  const AnimateOnInView = ({ inView, children }) => {
    return inView ? children : null;
  };

  const lineItems = [
    {
      title: "Define the Project Scope",
      content:
        "Gather requirements from the client/stakeholders to understand the goals and objectives of the website. Identify the key features, functionality, and content that the website needs.",
      transitionDuration: 1,
    },
    {
      title: "Research and Competitive Analysis",
      content:
        "Conduct market research to understand industry-trends, and competitors. Analyze the  competitors sites to identify strengths and weaknesses.",
      transitionDuration: 0.8,
    },
    {
      title: "Plan Information Architecture",
      content:
        "Create a site map to outline the structure and hierarchy of the website. Organize content into categories and define navigation paths.",
      transitionDuration: 1.2,
    },
    {
      title: "Wireframing and Prototyping",
      content:"Create visual representations of page layouts and content placement through wireframes. Firm understanding of UX/UI design principles, knowledge of information architecture.",
      transitionDuration: 1,
    },
    {
      title: "Design Mockups",
      content:
      "Design the visual elements of the website, including colors, typography, images, and branding elements. Collaboration with designers to maintain congruency of technical implementation and alignments with the design vision.",
      transitionDuration: 0.8,
    },
    {
      title: "Content Creation and Gathering",
      content:
      "Develop or gather content such as text, images, videos, and multimedia elements. Conduct content strategy research to refine both the user experience and technical aspects of the design.",
      transitionDuration: 1.2,
    },
    {
      title: "Development and Coding",
      content:
      "Translate design mockups into functional code. Implement features and while providing a smooth user experience through knowledge of JavaScript, CSS, HTML. Uitilize frameworks like React, Ruby on Rails and other libaries stream line production, and implementation of features. Understands UI archetitural principles for creating intuitive and visually appealing interface.",
      transitionDuration: 1.2,
    },
    {
      title: "Testing and Quality Assurance",
      content:
      "Thoroughly test the website for functionality, usability, and cross-browser compatibility. Check for broken links, errors, and accessibility issues. Identify and fix bugs or descreptencies in the code. Knowledge of testing frameworks and methodologies JEST Rspec. Engages in gathering feedback to make iterative improvements.",
      transitionDuration: 1.2,
    },
    {
      title: "Responsive Design",
      content:
      "Ensure the website is responsive and adapts to various screensizes and devices; desktop, tablet, mobile. Implementing responsive design involves using CSS media queries and flexible grids. Conducts testing and verification accross different devices to address responsiveness in order to provide reliable and adative design.",
      transitionDuration: 1.2,
    },
  ];

  return (
    <>
      <section className="section3" ref={sectionRef}>
        <div className="list-container">
          {lineItems.map((item, index) => (
            <AnimateOnInView key={index} inView={sectionInView}>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: item.transitionDuration }}
                className={`list-item motion-div-${index + 1}`}
              >
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </motion.div>
            </AnimateOnInView>
          ))}
        </div>
        {/* <div className="wood-box">
            <img src={wood}  className="wood" alt=""></img>
        </div> */}
      </section>
    </>
  );
};

export default Section3;
