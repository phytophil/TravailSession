import React from 'react';
import PropTypes from 'prop-types';
import classes from './Datepicker.module.css';

const Datepicker = ({initialValue = 0}) => {
    const {count, incrementCount} = useLogic(initialValue);
  
    return (
      <div className={classes.test}>
        
        
      </div>
    );
  };

Datepicker.propTypes = {
    /**
     * Define initial value for the Datepicker
     */
    initialValue: PropTypes.number.isRequired,
  };
  
  export default Datepicker;