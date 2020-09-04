import React, { useEffect, useState } from "react";
import classes from "./Press.module.scss";
import { Text, Card, Button } from "../../components";
import { pressNowU2 } from "../../assets";
import { pressCoverageURL } from "../../utils/constants";
import { aboutNowU } from "../../assets";
import { aboutFounders } from "../../assets";
import { appDesignWalkThrough } from "../../assets";
import { pressReleaseAppLaunch } from "../../assets";
import { nowUBrandGuide } from "../../assets";


const Press = () => {
  const [pressCoverage, setpressCoverage] = useState([]);
  useEffect(() => {
    const fetchPressCoverage = async () => {
      const resp = await fetch(pressCoverageURL);
      const coverage = await resp.json();
      setpressCoverage(coverage?.data);
    };
    fetchPressCoverage();
  }, []);

  const pressPackArray = [{
    id: 0,
    text: "About now-u",
    value: aboutNowU
  }, {
    id: 1,
    text: "App walk-through",
    value: appDesignWalkThrough
  }, {
    id: 2,
    text: "About the founders",
    value: aboutFounders
  }, {
    id: 3,
    text: "now-u branding",
    value: nowUBrandGuide
  }, {
    id: 4,
    text: "Press Release",
    value: pressReleaseAppLaunch
  }];
  const pressPackElement = pressPackArray.map(element => {
    return (
      <Button variant="primary" key={element.id} className={classes.pressPackButton}>
        <a href={element.value} target="_blank" rel="noopener noreferrer">
          {element.text}
        </a>
      </Button>
    );
  });
  return (
    <div className={classes.getInTouchContainer}>
      <div className={classes.header}>
        <Text type="h2" className={classes.headerText}>Press</Text>
      </div>
      <div className={classes.content}>
        <div className={classes.textSection}>
          <Text type="h2" className={classes.heading}>Press contact: Saul Harris</Text>
          <Text type="p" className={classes.paragraphText}>
                        To get in touch with Saul, please contact <a href="mailto:press@now-u.com">press@now-u.com</a>
          </Text>
        </div>
        <div className={classes.imageSection}>
          <img src={pressNowU2} alt="Road Sign" className={classes.roadSignImage} />
        </div>
      </div>
      <div>
        <div className={classes.PressCoverageText}>
          <Text type="h2" >Press coverage</Text>
        </div>
        <div>
          {pressCoverage.length ? pressCoverage.map((element) => {
            return (
              <Card
                key={element.id}
                imageUrl={element.image_url}
                title={element.title}
                mediaName={element.media_name}
                link={element.link}>
              </Card>
            );
          }) : null}
        </div>
      </div>
      <div className={classes.PressPack}>
        <div >
          <Text type="h2" >Press Pack</Text>
        </div>
        <div>
          {pressPackElement}
        </div>
      </div>
    </div>
  );
};

export default Press;
