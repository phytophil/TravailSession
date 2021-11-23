import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import classes from './Checkbox.module.css'

export default function CheckboxLabels() {
  return (
    <FormGroup className={classes.Checkverte} >
      <FormControlLabel control={<Checkbox defaultChecked />} label="Menu pour végétariens" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Menu pour enfants" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="Menu pour coeliaque" />
      <FormControlLabel disabled control={<Checkbox />} label="Menu pour bébés" />
    </FormGroup>
  );
}