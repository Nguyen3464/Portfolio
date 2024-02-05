import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import wood from "./Assets/wood.jpeg"

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
        <div className="wood-box">
            <img src={wood}  className="wood" alt=""></img>
        </div>
      </section>
    </>
  );
};

export default Section3;
