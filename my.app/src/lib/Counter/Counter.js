import React from 'react';
import PropTypes from 'prop-types';
import useLogic from './useLogic';
import classes from './Counter.module.css';

const Counter = ({initialValue = 0}) => {
  const {count, incrementCount} = useLogic(initialValue);

  return (
    <div className={classes.counter}>
      <h2 className={classes.header}> Table N #1 </h2>
      <button className={classes.button} type="button" onClick={incrementCount}>
        Ajoutez des personnes ici
      </button>
      <div>
      Nombre de personnes invités: <strong>{count}</strong>
      </div>
    </div>
  );
};

Counter.propTypes = {
  /**
   * Define initial value for the Counter
   */
  initialValue: PropTypes.number.isRequired,
};

export default Counter;
