import React from "react";
import { motion } from "framer-motion";
import army from "../Assets/army.png"
import javascript from "../Assets/javascript.png"
import ruby from "../Assets/ruby.png"
import html from "../Assets/html.png"
import css from "../Assets/css.svg.png"
import react from "../Assets/react.png"
import rubyonrails from "../Assets/rubyonrails.png"
import postgresql from "../Assets/postgresql.png"
import postman from "../Assets/postman.png"
import jest from "../Assets/jest.webp"
import rspec from "../Assets/rspec.png"
import git from "../Assets/git.png"
import github from "../Assets/github.svg"
import figma from "../Assets/figma.png"
import canva from "../Assets/canva.png"
import notion from "../Assets/notion.png"
import trello from "../Assets/trello.png"
import zoom from "../Assets/zoom.png"
import slack from "../Assets/slack.png"
import terminal from "../Assets/terminal.png"
import vscode from "../Assets/vscode.png"
import yarn from "../Assets/yarn.png"
import node from "../Assets/nodejs.png"
import macos from "../Assets/macos.png"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import gis1 from "../Assets/gis1.jpeg"
import gis2 from "../Assets/gis2.jpeg"
import gis3 from "../Assets/gis3.jpeg"
import gis4 from "../Assets/gis4.png"

const images = [
  { key: "javascript", src: javascript, duration: 1.2, class: "box1" },
  { key: "ruby", src: ruby, duration: 1.6, class: "box2" },
  { key: "html", src: html, duration: 2.1, class: "box3" },
  { key: "css", src: css, duration: 2.7, class: "box4" },
  { key: "react", src: react, duration: 3.3, class: "box5" },
  { key: "rubyonrails", src: rubyonrails, duration: 3.9, class: "box2" },
  { key: "postgresql", src: postgresql, duration: 4.5, class: "box2" },
  { key: "postman", src: postman, duration: 5.1, class: "box3" },
  { key: "jest", src: jest, duration: 5.7, class: "box4" },
  { key: "rspec", src: rspec, duration: 6.3, class: "box5" },
  { key: "git", src: git, duration: 6.9, class: "box1" },
  { key: "github", src: github, duration: 7.5, class: "box3" },
  { key: "figma", src: figma, duration: 8.1, class: "box4" },
  { key: "canva", src: canva, duration: 8.7, class: "box5" },
  { key: "notion", src: notion, duration: 9.3, class: "box2" },
  { key: "trello", src: trello, duration: 9.9, class: "box3" },
  { key: "zoom", src: zoom, duration: 10.5, class: "box4" },
  { key: "slack", src: slack, duration: 11.1, class: "box5" },
  { key: "vscode", src: vscode, duration: 11.7, class: "box5" },
  { key: "terminal", src: terminal, duration: 12.3, class: "box4" },
  { key: "yarn", src: yarn, duration: 12.9, class: "box1" },
  { key: "node", src: node, duration: 13.5, class: "box2" },
  { key: "macos", src: macos, duration: 14.1, class: "box3" },
]

export const Skills = () => {
  return (
    <>
      <div className="container">
        <ResponsiveMasonry className="masonry" columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry className="masonry" gutter="20px">
            {images.map((image) => (
              <motion.img
                key={image.key}
                src={image.src}
                style={{ width: '100%', display: "block" }}
                initial={{ opacity: 0.0, scale: 0.95 }}
                animate={{ opacity: 1.0, scale: 1 }}
                transition={{ duration: image.duration, ease: "easeIn" }}
                alt=""
                className={`images ${image.class}`}  
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
      <div className="geoint">
        <h1>Geospatial Intelligence Imagery Analyst</h1>
        <div className="army">
          <img classname="army-image" src={army} />  
        </div>
      </div>
      <div className="geoint-skills-container">
        <div className="skills1">
          <h3>Analytical Thinking</h3>
          <p>Developed process and analyzed complex geospatial data. Extracted meaningful "patterns of life" to support decision-making operations. Conducted fusion between adjacent intelligence disciplines to integrate domain-specific knowledge into the analytical processes. Produced models based on interdisciplinary insights.</p>
        </div>
        <div className="skills1">
          <h3>Requirement Gathering and User-Centric Focus</h3>
          <p>Engaged in collaborative meetings with military personnel, officers, and decision-makers to understand their information needs. Led requirement gathering sessions for geospatial projects, ensuring alignment with end-user and operational objectives. Liaisoned between technical teams and end-users, to maintain comprehension between chain of command</p>
        </div>
        <div className="skills1">
          <h3>Data Handling and Database Knowledge</h3>
          <p>Contributed in integration of diverse datasets from various sources, including satellite imagery, aerial photographs, and ground-based sensor data.  Managed large volume datasets to derive actionable intelligence for producing products</p>
        </div>
        
        <div className="skills1">
          <h3>Communication for Code Documentation</h3>
          <p>Communicated analysis methodologies in written reports. Conducted in AAR "After Action Reviews" with analysts and commanders to ensure reporting quality and adherence to standards and procedures. Provided constructive feedback and suggestions for improvements, fostering a collaborative and communicative AAR environment.</p>
        </div>
        <div className="skills1">
          <h3>Agile Project Management</h3>
          <p>Responded proactively to changing requirements and emerging priorities by adjusting the project backlog, and production goals. Held daily intelligence reviews to gather feedback on progress, changes to environmental conditions; In order to ensure adaptability, and accuracy in preperation of project delivery. Applied a flexible mindset, accommodating shifts in focus on time constraints based on the evolving needs of PIR "Priority Information Requests".
  </p>
        </div>
      </div>
      <div className="grid-container">
        <div className="grid-item1"></div>
        <div className="grid-item2"></div>
        <div className="grid-item3"></div>
        <div className="grid-item4"></div>
      </div>
    </>
  );
};
