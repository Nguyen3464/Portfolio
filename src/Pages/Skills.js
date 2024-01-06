import React from "react";
import { motion } from "framer-motion";
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
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: image.duration, ease: "easeIn" }}
                alt=""
                className={`images ${image.class}`}  
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
      <div>
        
      </div>
    </>
  );
};
