import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}>
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{maxWidth: 375}}>
      <CardContent>
        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
          Blog
        </Typography>
        <Typography variant="h5" component="div">
          Se lancer dans le monde du NFT : Êtes-vous prêt?
        </Typography>
        <Typography sx={{mb: 1.5}} color="text.secondary">
          Cardano
        </Typography>
        <Typography variant="body2">
          Comment mine-t-on Cardano ? Il y a là un détail crucial à préciser :
          en réalité, Cardano n’est pas un actif que vous pouvez “miner”. Cette
          cryptomonnaie née en 2017 gagnant actuellement en popularité, de plus
          en plus de passionnés de crypto ont essayé de contribuer au réseau.
          Certains ont ainsi voulu miner Cardano, mais l’ADA fonctionne grâce au
          staking, et non grâce au minage.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">En savoir plus</Button>
      </CardActions>
    </Card>
  );
}
