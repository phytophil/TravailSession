import React from 'react';
import PropTypes from 'prop-types';
import {Timeline} from 'antd';

const Basictimeline = ({tempsligne}) => (
  <Timeline>
    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
    <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
  </Timeline>
);

Basictimeline.propTypes = {
  /**
   * Define initial value for the Basictimeline
   */
  tempsligne: PropTypes.string.isRequired,
};

export default Basictimeline;
