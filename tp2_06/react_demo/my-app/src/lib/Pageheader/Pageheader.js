import React from 'react';
import PropTypes from 'prop-types';
import {PageHeader} from 'antd';

const Pageheader = ({pagehead}) => (
  <PageHeader
    className="site-page-header"
    onBack={() => null}
    title="Titre"
    subTitle="Ceci est un sous-titre"
  />
);

Pageheader.propTypes = {
  /**
   * Define initial style for the Pageheader
   */
  pagehead: PropTypes.string.isRequired,
};

export default Pageheader;
