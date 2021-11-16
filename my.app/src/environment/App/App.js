import React from 'react';
import {Counter, Datepicker} from 'lib';
import classes from './App.module.css';

const App = () => (
  <div>
    <div className={classes.container}>
      <Counter initialValue={0} />
    </div>
    <div className={classes.container}>
      <Datepicker />
    </div>
  </div>
);

export default App;
