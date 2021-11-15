import React from 'react';
import PropTypes from 'prop-types';
import {Timeline} from 'antd';

const Basictimeline = ({tempsligne}) => (
  <Timeline>
    <Timeline.Item>Étape 1</Timeline.Item>
    <Timeline.Item>Étape 2</Timeline.Item>
    <Timeline.Item>Étape 3</Timeline.Item>
    <Timeline.Item>Étape 4</Timeline.Item>
  </Timeline>
);

Basictimeline.propTypes = {
  /**
   * Define initial value for the Basictimeline
   */
  tempsligne: PropTypes.string.isRequired,
};

export default Basictimeline;
