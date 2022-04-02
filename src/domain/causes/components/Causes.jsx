import React from "react";
import classes from "./Causes.module.scss";
import {Helmet} from "react-helmet";

const Causes = () => {
  return (
    <div className={classes.CausesContainer}>
      <Helmet>
        <title>now-u | Causes</title>
      </Helmet>
    </div>
  );
};

export default Causes;
