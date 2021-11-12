import React from 'react';
import PropTypes from 'prop-types';
import {Steps} from 'antd';

const {Step} = Steps;

<Steps current={1}>
  <Step title="Finished" description="This is a description." />
  <Step
    title="In Progress"
    subTitle="Left 00:00:08"
    description="This is a description."
  />
  <Step title="Waiting" description="This is a description." />
</Steps>;

Steps.propTypes = {
  /**
   * Define initial value for the Steps
   */
  etapes: PropTypes.string.isRequired,
};

export default Steps;
