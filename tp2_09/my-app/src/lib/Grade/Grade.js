import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import classes from './Grade.module.css';

const Grade = ({initialValue = 0}) => {
  Grade.propTypes = {
    /**
     * Define initial value for the Grade
     */
    initialValue: PropTypes.string.isRequired,
  };
};

export default function BasicRating() {
  const [value, setValue] = React.useState(2);

  return (
    <Box
      sx={{
        '& > legend': {mt: 2},
      }}>
      <Typography component="legend">Controlled</Typography>
      <Rating
        className={classes.test}
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Typography component="legend">Read only</Typography>
      <Rating name="read-only" value={value} readOnly />
      <Typography component="legend">Disabled</Typography>
      <Rating name="disabled" value={value} disabled />
      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} />
    </Box>
  );
}
