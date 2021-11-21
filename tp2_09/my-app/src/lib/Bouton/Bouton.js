import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import classes from './Bouton.module.css';

const Bouton = ({initialValue = 0}) => {
  Bouton.propTypes = {
    /**
     * Define initial value for the Bouton
     */
    initialValue: PropTypes.string.isRequired,
  };
};

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button className={classes.test} variant="text">
        Text
      </Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}
