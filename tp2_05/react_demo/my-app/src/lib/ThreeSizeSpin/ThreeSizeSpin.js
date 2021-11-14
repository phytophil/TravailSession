import React from 'react';
import PropTypes from 'prop-types';
import {Spin, Space} from 'antd';

const ThreeSizeSpin = ({threesizespin}) => (
  <Space size="middle">
    <Spin size="small" />
    <Spin />
    <Spin size="large" />
  </Space>
);

ThreeSizeSpin.propTypes = {
  /**
   * Three Size of Spin
   */
  threesizespin: PropTypes.string.isRequired,
};

export default ThreeSizeSpin;
