import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function SimplePaper() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}>
      <Paper elevation={3} MuiPaper-rounded />
      <Paper />
      <Paper elevation={8} />
    </Box>
  );
}

export default SimplePaper;
