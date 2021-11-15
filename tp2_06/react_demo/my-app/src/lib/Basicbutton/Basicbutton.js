import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Btn texte</Button>
      <Button variant="contained">Btn plein</Button>
      <Button variant="outlined">Btn contour</Button>
    </Stack>
  );
}