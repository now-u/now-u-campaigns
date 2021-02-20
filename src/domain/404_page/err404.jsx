import React from "react";
import classes from "./err404.module.scss";
import { Text } from "../../components";
import { err404 } from "../../assets";
import { Helmet } from "react-helmet";

const error404 = () => {
  return (
    <div className={classes.box}>
      <Helmet>
        <title>now-u | 404</title>
      </Helmet>
      <div className={classes.text}>
        <Text type="h2">
                    Oh Dear...
        </Text>
        <Text type="p">
                    Looks like something’s wrong…
        </Text>
      </div>
      <img src={err404} alt="Error 404"/>
    </div>

  );
};

export default error404;
