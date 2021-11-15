import React from 'react';
import PropTypes from 'prop-types';
import {Carousel} from 'antd';
import classes from './Carrouselfade.module.css';

const Carrouselfade = ({carrousel}) => (
  <Carousel effect="fade">
    <div>
      <h3>1</h3>
    </div>
    <div>
      <h3>2</h3>
    </div>
    <div>
      <h3>3</h3>
    </div>
    <div>
      <h3>4</h3>
    </div>
  </Carousel>
);

Carrouselfade.propTypes = {
  /**
   * Define the Carrouselfade
   */
  carrousel: PropTypes.string.isRequired,
};

export default Carrouselfade;
