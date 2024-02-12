import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import javascript from "./Assets/javascript.png";
import ruby from "./Assets/ruby.png";
import html from "./Assets/html.png";
import css from "./Assets/css.svg.png";
import react from "./Assets/react.png";
import rubyonrails from "./Assets/rubyonrails.png";
import postgresql from "./Assets/postgresql.png";
import postman from "./Assets/postman.png";
import jest from "./Assets/jest.webp";
import rspec from "./Assets/rspec.png";
import git from "./Assets/git.png";
import github from "./Assets/github.svg";
import figma from "./Assets/figma.png";
import canva from "./Assets/canva.png";
import notion from "./Assets/notion.png";
import trello from "./Assets/trello.png";
import zoom from "./Assets/zoom.png";
import slack from "./Assets/slack.png";
import terminal from "./Assets/terminal.png";
import vscode from "./Assets/vscode.png";
import yarn from "./Assets/yarn.png";
import node from "./Assets/nodejs.png";
import macos from "./Assets/macos.png";
import AnimateInView from "./AnimateInView";

const TechSkills = () => {
  const images = [
    { key: "javascript", src: javascript, duration: 1.5, class: "box1" },
    { key: "ruby", src: ruby, duration: 1.8, class: "box2" },
    { key: "html", src: html, duration: 2.1, class: "box3" },
    { key: "css", src: css, duration: 2.4, class: "box4" },
    { key: "react", src: react, duration: 2.7, class: "box5" },
    { key: "rubyonrails", src: rubyonrails, duration: 3.0, class: "box1" },
    { key: "postgresql", src: postgresql, duration: 3.3, class: "box1" },
    { key: "postman", src: postman, duration: 3.5, class: "box5" },
    { key: "jest", src: jest, duration: 3.8, class: "box4" },
    { key: "rspec", src: rspec, duration: 1.5, class: "box5" },
    { key: "git", src: git, duration: 1.5, class: "box1" },
    { key: "github", src: github, duration: 1.5, class: "box5" },
    { key: "figma", src: figma, duration: 1.1, class: "box4" },
    { key: "canva", src: canva, duration: 1.5, class: "box5" },
    { key: "notion", src: notion, duration: 1.5, class: "box1" },
    { key: "trello", src: trello, duration: 1.5, class: "box5" },
    { key: "zoom", src: zoom, duration: 1.5, class: "box4" },
    { key: "slack", src: slack, duration: 1.5, class: "box5" },
    { key: "vscode", src: vscode, duration: 1.5, class: "box5" },
    { key: "terminal", src: terminal, duration: 1.5, class: "box4" },
    { key: "yarn", src: yarn, duration: 1.5, class: "box1" },
    { key: "node", src: node, duration: 1.5, class: "box2" },
    { key: "macos", src: macos, duration: 1.5, class: "box3" },
  ];
  return (
    <>
      <div className="container3">
        <ResponsiveMasonry
          className="masonry"
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        >
          <Masonry className="masonry" gutter="20px">
            {images.map((image, index) => (
              <AnimateInView key={index} image={image} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
};

export default TechSkills;
