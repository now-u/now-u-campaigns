import React, { useState } from 'react';
import classes from './exampleComponent.module.scss';
import ExampleChildComponent from './ExampleChildComponent'

const exampleComponent = () => {
  const [exampleState, setExampleState] = useState(0)
  return (
    <div className={classes.exampleContainer}>
      <h1 className={classes.exampleTitle}>Example Title</h1>
      <button id="social-button">Instagram</button>
      <div id="example-state">{exampleState}</div>
      <a href={classes.exampleLink}>Example Link</a>
      <button id='click-to-change-state' onClick={() => setExampleState(1)}>Click Me To Change State</button>

      <ExampleChildComponent />
    </div>
  );
};

export default exampleComponent;