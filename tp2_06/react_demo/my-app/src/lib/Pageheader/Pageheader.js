import React from 'react';
import PropTypes from 'prop-types';
import {PageHeader} from 'antd';

const Pageheader = ({pagehead}) => (
  <PageHeader
    className="site-page-header"
    onBack={() => null}
    title="Title"
    subTitle="This is a subtitle"
  />
);

Pageheader.propTypes = {
  /**
   * Define initial value for the Pageheader
   */
  pagehead: PropTypes.string.isRequired,
};

export default Pageheader;
