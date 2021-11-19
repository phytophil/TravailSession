import React from 'react';
import {Counter, Componente1, Componente2, Componente3} from 'lib';
import classes from './App.module.css';

const App = () => (
  <div>
    <div className={classes.container}>
      <Counter initialValue={0} />
    </div>
    <div className={classes.container}>
      <Componente1 />
    </div>
    <div>
      <Componente2 />
    </div>
    <div>
      <Componente3 />
    </div>
  </div>
);


export default App;
