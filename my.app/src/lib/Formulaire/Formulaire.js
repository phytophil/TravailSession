import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import classes from './Formulaire.module.css'

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': {m: 1, width: '25ch'},
      }}
      noValidate
      autoComplete="off"
    >
      <div className={classes.texteBoite}>
        <TextField
          className={classes.texteBoiteSmall}
          required
          id="standard-required"
          label="Votre Nom"
          defaultValue=""
          variant="standard"
        />
        <TextField
          required
          id="standard-required"
          label="Téléphone"
          defaultValue=""
          variant="standard"
        />
        <TextField
          id="standard-number"
          label="Nombre d'invitations"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
        <TextField
          id="standard-search"
          label="Type de restaurante"
          type="search"
          variant="standard"
        />
        <TextField
          id="standard-helperText"
          label="Commentaires"
          defaultValue=""
          helperText="SVP Laissez-nous savoir si vous avez des restrictions alimentaires."
          variant="standard"
        />
      </div>
    </Box>
  );
}