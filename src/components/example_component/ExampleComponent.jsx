import React from 'react';
import classes from './exampleComponent.module.scss';

const exampleComponent = () => {
  return (
    <div className={classes.exampleContainer}>
      <h1 className={classes.exampleTitle}>Example Title</h1>
      <a href={classes.exampleLink}>Example Link</a>
    </div>
  );
};

export default exampleComponent;
