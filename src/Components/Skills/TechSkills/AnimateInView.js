import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimateInView = ({ image }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const translateY = inView ? 0 : 70;
  return (
    <motion.img
      src={image.src}
      style={{ width: "100%", display: "block" }}
      initial={{ opacity: 0.0, scale: 0.95, y: translateY }}
      animate={inView ? { opacity: 1.0, scale: 1, y: 0 } : {}}
      transition={{ duration: image.duration, ease: "easeInOut" }}
      alt=""
      className={`images ${image.class}`}
      ref={ref}
    />
  );
};

export default AnimateInView;
