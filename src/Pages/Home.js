import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Home = () => {
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
  });
  const AnimateOnInView = ({ inView, children }) => {
    return inView ? children : null;
  };

  return (
    <div>
      <div className="section1">
        <h1 className="section1-h1">My names Nguyen Nguyen</h1>
        <p className="section1-p">
          Full Stack Web <br></br>Developer
        </p>
      </div>
      <div className="section2">
        <div className="veg1-container"></div>
        <div className="section2-container">
          <p className="section2-p">
            I specialize in UX/UI, crafting visually stunning and user-centric
            digital experiences. With expertise in design and development, I
            oversee projects from concept to deployment, ensuring seamless and
            intuitive user journeys.
          </p>
        </div>
      </div>
      <div className="section3" ref={sectionRef}>
        <div className="section3-container1">
          <AnimateOnInView inView={sectionInView}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="motion-div-1"
            >
              <h2>Define the Project Scope</h2>
              <p>
                Gather requirements from the client/stakeholders to understand
                the goals and objectives of the website. Identify the key
                features, functionality, and content that the website needs.
              </p>
            </motion.div>
          </AnimateOnInView>

          <AnimateOnInView inView={sectionInView}>
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 3 }}
              className="motion-div-2"
            >
              <h2>Research and Competitive Analysis</h2>
              <p>
                Conduct market research to understand industry-trends, and
                competitors. Analyze the competitors sites to identify strengths
                and weaknesses.
              </p>
            </motion.div>
          </AnimateOnInView>

          <AnimateOnInView inView={sectionInView}>
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 5 }}
              className="motion-div-1"
            >
              <h2>Plan Information Architecture</h2>
              <p>
                Create a site map to outline the structure and hierarchy of the
                website. Organize content into categories and define navigation
                paths.
              </p>
            </motion.div>
          </AnimateOnInView>
        </div>
        <div className="section3-container2"></div>
      </div>
      <div className="section4">
        <div className="section4-container1">
          <div className="img1"></div>
          <div className="img2"></div>
          <div className="img3"></div>
        </div>
      </div>
      <div className="section5-container1">
        <div className="section5-container2">
          <h2>Wireframing and Prototyping</h2>
          <p>
            Develop wireframes to create a visual representation of page layouts
            and content placement.
          </p>
          <h2>Design Mockups</h2>
          <p>
            Design the visual elements of the website, including colors,
            typography, images, and branding elements.
          </p>
          <h2>Content Creation and Gathering</h2>
          <p>
            Develop or gather content such as text, images, videos, and other
            multimedia elements.
          </p>
        </div>
        <div className="section5-container3">
          <h2>Development and Coding</h2>
          <p>
            Choose the appropriate technology stack (e.g.,
            Javascript/CSS/HTML/React/Ruby on Rails).
          </p>
          <h2>Testing and Quality Assurance</h2>
          <p>
            Thoroughly test the website for functionality, usability, and
            cross-browser compatibility. Check for broken links, errors, and
            accessibility issues.
          </p>
          <h2>Responsive Design</h2>
          <p>
            Make sure the website is responsive and adapts to various screen
            sizes and devices (desktop, tablet, mobile).
          </p>
        </div>
      </div>
      <div className="section6"></div>
      <div className="section7"></div>
    </div>
  );
};
