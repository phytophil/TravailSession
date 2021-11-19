import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import classes from './button.module.css';

export default function ContainedButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained">Contained</Button>
      <Button 
      class={classes.ButtonAction}
      variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" href="#contained-buttons">
        Link
      </Button>
    </Stack>
  );
}
