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
   * Pageheader add title
   */
  pagehead: PropTypes.string.isRequired,
};

export default Pageheader;
