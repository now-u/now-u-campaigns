import React from "react";
import classes from "./WhoSection.module.scss";
import { Text, Button } from "../../../../components";
import { teamCollage } from "../../../../assets";

const WhoSection = () => {
  return (
    <section className={classes.whoSection}>
      <div className={classes.content}>
        <div className={classes.textSection}>
          <Text type='h2' className={classes.header}>
                        Who is making it happen
          </Text>
          <Text type='p' className={classes.description}>
                        now-u has come together through the work of over 60
                        volunteers from across the UK and beyond, brought
                        together in this shared mission by co-founders Lizzie
                        and James Elgar.
          </Text>
        </div>
        <div className={classes.imageSection}>
          <div className={classes.collage}>
            <img src={teamCollage} alt='Team Collage' />
          </div>
          <Button
            variant='secondary'
            className={classes.meetTheTeam}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/company/now-u/people/",
                "_blank"
              )
            }
          >
                        Meet the team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhoSection;
