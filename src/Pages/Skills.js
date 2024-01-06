import React from "react";
import { motion } from "framer-motion";
import army from "../Assets/army.png";
import gnome1 from "../Assets/gnome1.png";
import gnome2 from "../Assets/gnome2.png";
import gnome3 from "../Assets/gnome3.png";
import gnome4 from "../Assets/gnome4.png";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const images = [
  { key: "army", src: army, duration: 1.1 },
  { key: "gnome1", src: gnome1, duration: 1.2 },
  { key: "gnome2", src: gnome2, duration: 1.4 },
  { key: "gnome3", src: gnome3, duration: 1.6 },
  { key: "gnome4", src: gnome4, duration: 1.8 },
]

export const Skills = () => {
  return (
    <>
    <div className="container">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="20px">
          {images.map((image) => (
            <motion.img
              key={image.key}
              src={image.src}
              style={{ width: '100%', display: "block" }}
              initial={{ opacity: 0.0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: image.duration, ease: "easeIn" }}
              alt=""
              className="images"
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
    </>
  );
};
