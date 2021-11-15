import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BasicRating() {
  const [value, setValue] = React.useState(2);

  return (
    <Box
      sx={{
        '& > legend': {mt: 2},
      }}>
      <Typography component="legend">Contrôle</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Typography component="legend">Lire seulement</Typography>
      <Rating name="read-only" value={value} readOnly />
      <Typography component="legend">Désactivé</Typography>
      <Rating name="disabled" value={value} disabled />
      <Typography component="legend">Aucune note disponible</Typography>
      <Rating name="no-value" value={null} />
    </Box>
  );
}
