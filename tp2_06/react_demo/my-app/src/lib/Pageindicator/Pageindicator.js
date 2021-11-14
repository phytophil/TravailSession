import React from 'react';
import PropTypes from 'prop-types';
import {Pagination} from 'antd';

const Pageindicator = ({page}) => <Pagination defaultCurrent={1} total={50} />;

Pageindicator.propTypes = {
  /**
   * Define initial value for the Pageindicator (how many pages and which page)
   */
  page: PropTypes.string.isRequired,
};

export default Pageindicator;
