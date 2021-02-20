import React from "react";
import classes from "./AboutUs.module.scss";
import { HeadingSection, WhySection, WhoSection, MissionSection } from "./components";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  return (
    <div className={classes.aboutUsContainer}>
      <Helmet>
        <title>now-u | About Us</title>
      </Helmet>
      <HeadingSection />
      <WhySection />
      <WhoSection />
      <MissionSection />
    </div>
  );
};

export default AboutUs;
