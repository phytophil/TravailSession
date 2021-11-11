import React from 'react';
import PropTypes from 'prop-types';
import {Input} from 'antd';

const {Search} = Input;
<>
  <Search placeholder="input search loading default" loading />
  <br />
  <br />
  <Search
    placeholder="input search loading with enterButton"
    loading
    enterButton
  />
  <br />
  <br />
  <Search
    placeholder="input search text"
    enterButton="Search"
    size="large"
    loading
  />
</>;

Input.propTypes = {
  /**
   * Define initial value for the Input picker (week,month,quarter,year)
   */
  inputsearch: PropTypes.string.isRequired,
};

export default Input;
