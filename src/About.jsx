import React from "react";
import web from "../src/images/hero-img.jpg";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About page"
        imgsrc={web}
        visit="/contact"
        btname="Ask Now"
      />
    </>
  );
};

export default About;
