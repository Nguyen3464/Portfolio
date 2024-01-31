import React, { useState, useEffect } from "react";
import salad2 from "../Assets/salad2.jpg";
import gnome1 from "../Assets/gnome1.png";
import gnome2 from "../Assets/gnome2.png";
import gnome3 from "../Assets/gnome3.png";
import gnome4 from "../Assets/gnome4.png";
import flower1 from "../Assets/flower1.png";
import flower2 from "../Assets/flower2.png";
import pumpkin from "../Assets/pumpkin.png";
import sun from "../Assets/sun.png";
import mushroom1 from "../Assets/mushroom1.png";
import mushroom2 from "../Assets/mushroom2.png";

import { Label, Form, FormGroup, Input } from "reactstrap";
import { motion } from "framer-motion";

const Contact = () => {
  const [sunVisible, setSunVisible] = useState(false);
  const [showGnome1, setShowGnome1] = useState(false);
  const [showGnome2, setShowGnome2] = useState(false);
  const [showGnome3, setShowGnome3] = useState(false);
  const [showflower1, setShowflower1] = useState(false);
  const [showflower2, setShowflower2] = useState(false);
  const [showMushroom1, setShowMushroom1] = useState(false);
  const [showMushroom2, setShowMushroom2] = useState(false);

  const handleButtonClick = () => {
    setSunVisible(true);
    setShowGnome1(true);
    setShowGnome2(true);
    setShowGnome3(true);
    setShowMushroom1(true);
    setShowMushroom2(true);
    setShowflower1(true);
    setShowflower2(true);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      <div className="contact-section">
        <div className="contact">
          <Form
            action="https://formsubmit.co/n.nguyen3464@gmail.com"
            method="POST"
            className="form"
          >
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="example@email.com"
                type="email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Message</Label>
              <Input
                id="exampleText"
                name="text"
                placeholder="text"
                type="textarea"
                style={{ height: "140px" }}
              />
            </FormGroup>
            <button className="form-button">Submit</button>
          </Form>
          <img src={salad2} alt="salad picture 2" className="salad2" />
        </div>
        <div className="gnome-garden">
          <motion.img
            src={gnome1}
            alt="gnome1"
            className="gnome1"
            initial={{ x: 0 }}
            animate={
              showGnome1
                ? windowWidth <= 480
                  ? { x: "10vw" }
                  : { x: "10vw" }
                : { x: 0 }
            }
            transition={{
              duration: 4,
              type: "tween",
              ease: "easeInOut",
            }}
          />
          <motion.img
            src={gnome2}
            alt="gnome2"
            className="gnome2"
            initial={{ y: 300 }}
            animate={{ y: sunVisible ? 0 : 300 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          <motion.img
            src={gnome4}
            alt="gnome4"
            id="gnome4"
            initial={{ y: 300 }}
            animate={{ y: sunVisible ? 0 : 300 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <motion.img
            src={gnome3}
            alt="gnome3"
            id="gnome3"
            initial={{ x: 300 }}
            animate={{ x: sunVisible ? 0 : 300 }}
            transition={{ duration: 5, ease: "easeOut" }}
          />
          <motion.img
            src={pumpkin}
            alt="pumpkin"
            className="pumpkin"
            initial={{ x: 300 }}
            animate={{ x: sunVisible ? 0 : 300 }}
            transition={{ duration: 3, ease: "easeOut" }}
          />

          <motion.img
            src={mushroom1}
            alt="mushroom1"
            className="mushroom1"
            initial={{ y: 300 }}
            animate={{ y: sunVisible ? 0 : 300 }}
            transition={{ duration: 3, ease: "easeOut" }}
          />
          <motion.img
            src={mushroom2}
            alt="mushroom2"
            className="mushroom2"
            initial={{ y: 300 }}
            animate={{ y: sunVisible ? 0 : 300 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <motion.img
            src={flower1}
            alt="flower1"
            className="flower1"
            initial={{ x: -300 }}
            animate={{ x: sunVisible ? 0 : -300 }}
            transition={{ duration: 3, ease: "easeOut" }}
          />
          <motion.img
            src={flower2}
            alt="flower2"
            className="flower2"
            initial={{ y: -300 }}
            animate={{ y: sunVisible ? 0 : -300 }}
            transition={{ duration: 4, ease: "easeOut" }}
          />
          <motion.img
            src={sun}
            alt="sun"
            className="sun"
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: sunVisible ? 0 : -1000, opacity: 1 }}
            transition={{ duration: 3, ease: "easeOut" }}
          />
          <button onClick={handleButtonClick} className="gnome-button">
            Show Sun
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
