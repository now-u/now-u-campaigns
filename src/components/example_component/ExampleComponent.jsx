import React, { useState } from 'react';
import classes from './exampleComponent.module.scss';
import ExampleChildComponent from './ExampleChildComponent'

const ExampleComponent = () => {
  const [exampleState, setExampleState] = useState(0)
  
  const sayHelloWorld = () => {
    return 'Hello world!'
  }

  const triggerTimeout = () => {
    setTimeout(() => {
      
    }, 10000);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  
  return (
    <div className={classes.exampleContainer}>
      <h1 className={classes.exampleTitle}>Example Title</h1>
      
      <button id="social-button">Instagram</button>
      
      <div id="example-state">{exampleState}</div>
      
      <a href={classes.exampleLink}>Example Link</a>
      
      <button id='click-to-change-state' onClick={() => setExampleState(1)}>Click Me To Change State</button>

      <ExampleChildComponent />

      <form onSubmit={handleSubmit}>
        <input type="text" value="Enter some information"/>
      </form>

      <button id='trigger-timeout' onClick={triggerTimeout}>Click me to trigger timeout</button>
    </div>
  );
};

export default ExampleComponent;