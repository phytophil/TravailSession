import React from 'react';
import PropTypes from 'prop-types';
import {PageHeader} from 'antd';
import classes from './Pageheader.module.css';

const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu',
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu',
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu',
  },
];

const Pageheader = ({initialValue = 0}) => (
  <PageHeader
    className="site-page-header"
    title="Ceci est un titre"
    breadcrumb={{routes}}
    subTitle="This is a subtitle"
  />
);

Pageheader.propTypes = {
  /**
   * Define initial value for the Pageheader
   */
  initialValue: PropTypes.string.isRequired,
};

export default Pageheader;
