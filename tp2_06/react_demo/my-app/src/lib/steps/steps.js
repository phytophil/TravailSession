import React from 'react';
import PropTypes from 'prop-types';
import {Steps} from 'antd';

const {Step} = Steps;

const steps = ({etapesligne}) => (
  <Steps size="small" current={1}>
    <Step title="Finished" />
    <Step title="In Progress" />
    <Step title="Waiting" />
  </Steps>
);

steps.propTypes = {
  /**
   * Define initial value for the etapesligne
   */
  etapesligne: PropTypes.number.isRequired,
};

export default steps;
