import React from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
import Section1 from "../Components/Home/Section1/Section1";
import Section2 from "../Components/Home/Section2/Section2";
import Section3 from "../Components/Home/Section3/Section3"

export const Home = () => {
  // const [sectionRef, sectionInView] = useInView({
  //   triggerOnce: true,
  // });
  // const AnimateOnInView = ({ inView, children }) => {
  //   return inView ? children : null;
  // };

  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />

      {/* <div className="section3" ref={sectionRef}>
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
              transition={{ duration: 2 }}
              className="motion-div-2"
            >
              <h2>Research and Competitive Analysis</h2>
              <p>
                Conduct market research to understand industry-trends, and
                competitors. Analyze the  competitors sites to identify strengths
                and weaknesses.
              </p>
            </motion.div>
          </AnimateOnInView>

          <AnimateOnInView inView={sectionInView}>
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 3 }}
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
      </div> */}
      <div className="section4">
        <div className="section4-container1">
          <div className="img-container">
            <div className="img1"></div>
          </div>
          <div className="img-container">
            <div className="img2"></div>
          </div>
          <div className="img-container">
            <div className="img3"></div>
          </div>
        </div>
      </div>
      <div className="process-container">
        <div className="process-image"></div>
        <div className="processes">
          <div className="process-step1">
            <h2>Wireframing and Prototyping</h2>
            <p>
              Create visual representations of page layouts and content
              placement through wireframes. Firm understanding of UX/UI design
              principles, knowledge of information architecture.
            </p>
          </div>
          <div className="process-step2">
            <h2>Design Mockups</h2>
            <p>
              Design the visual elements of the website, including colors,
              typography, images, and branding elements. Collaboration with
              designers to maintain congruency of technical implementation and
              alignments with the design vision.
            </p>
          </div>
          <div className="process-step3">
            <h2>Content Creation and Gathering</h2>
            <p>
              Develop or gather content such as text, images, videos, and
              multimedia elements. Conduct content strategy research to refine
              both the user experience and technical aspects of the design.
            </p>
          </div>
          <div className="process-step4">
            <h2>Development and Coding</h2>
            <p>
              Translate design mockups into functional code. Implement features
              and while providing a smooth user experience through knowledge of
              JavaScript, CSS, HTML. Uitilize frameworks like React, Ruby on
              Rails and other libaries stream line production, and
              implementation of features. Understands UI archetitural principles
              for creating intuitive and visually appealing interface.
            </p>
          </div>
          <div className="process-step5">
            <h2>Testing and Quality Assurance</h2>
            <p>
              Thoroughly test the website for functionality, usability, and
              cross-browser compatibility. Check for broken links, errors, and
              accessibility issues. Identify and fix bugs or descreptencies in
              the code. Knowledge of testing frameworks and methodologies JEST
              Rspec. Engages in gathering feedback to make iterative
              improvements.
            </p>
          </div>
          <div className="process-step6">
            <h2>Responsive Design</h2>
            <p>
              Ensure the website is responsive and adapts to various screen
              sizes and devices; desktop, tablet, mobile. Implementing
              responsive design involves using CSS media queries and flexible
              grids. Conducts testing and verification accross different devices
              to address responsiveness in order to provide reliable and adative
              design.
            </p>
          </div>
        </div>
      </div>

      <div className="section6">add front end imagry</div>
      <div className="back-of-house">
        <div className="boh-intro-container">
          <div className="boh-intro-image-box"></div>
          <div className="boh-intro-text-box">
            <p>
              As a backend developer, I use JavaScript and Ruby on Rails with
              ActiveRecord for database integrations. Leveraging
              PostgreSQL, I design, query, and optimize databases for data
              integrity and performance. Committed to code quality, I practice
              test-driven development with Jest and RSpec, ensuring reliable,
              maintainable code. In API development, I verify data connectivity
              with Postman using RESTful routes methodologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
