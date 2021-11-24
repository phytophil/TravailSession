import React from 'react';
import PropTypes from 'prop-types';
import {Breadcrumb} from 'antd';

const BreadCrumb = ({initialValue = 0}) => (
  <Breadcrumb>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Application Center</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Application List</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>An Application</Breadcrumb.Item>
  </Breadcrumb>
);

BreadCrumb.propTypes = {
  /**
   * Define initial value for the Breadcrumb
   */
  initialValue: PropTypes.string.isRequired,
};

export default BreadCrumb;
