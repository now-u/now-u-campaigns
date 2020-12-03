import React from "react";
import classes from "./AboutUs.module.scss";
import { HeadingSection, WhySection, WhoSection, MissionSection } from "./components";

const AboutUs = () => {
  return (
    <div className={classes.aboutUsContainer}>
      <HeadingSection />
      <WhySection />
      <WhoSection />
      <MissionSection />
    </div>
  );
};

export default AboutUs;
