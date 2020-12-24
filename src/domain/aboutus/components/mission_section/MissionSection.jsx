import React from "react";
import classes from "./MissionSection.module.scss";
import { Text } from "../../../../components";

const MissionSection = () => {
  return (
    <section className={classes.missionSection}>
      <div className={classes.content}>
        <Text type='h2' className={classes.header}>
                    Our mission
        </Text>
        <Text type='p' className={classes.description}>
                    To connect individuals with tangible and effective actions
                    they can take to help tackle important issues through
                    coordinated collective campaigns. We aspire to become the
                    template for a new model of collective action and altruism,
                    bringing people together to create <em>A World of Good </em>
                    in a way that&apos;s simple, meaningful and leads to lasting
                    and sustainable change.
        </Text>
      </div>
    </section>
  );
};

export default MissionSection;
