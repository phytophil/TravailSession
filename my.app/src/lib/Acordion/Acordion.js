import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import classes from './Acordion.module.css';
import imagen from './img/menuDejeuner.jpg';

export default function SimpleAccordion() {
  return (
    
    <div  className={classes.accordion}>
    
    <h2 className={classes.header}> Notre Menu de printemps ☼ </h2>

        <img src={imagen} alt="imagen background"/>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Menu du déjeuner</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Crêpes à la confiture de fraise
          </Typography>
          <Typography>
          Crêpes avec fromage
          </Typography>
          <Typography>
          Omelettes aux légumes
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Menu du dinner</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Soupe de légumes
          </Typography>
          <Typography>
          Nouilles sauce rouge
          </Typography>
          <Typography>
          Paella
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Menu pour noël</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}