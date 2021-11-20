import React from 'react';
import PropTypes from 'prop-types';
import {Divider} from 'antd';

const DiviDer = ({initialValue = 0}) => (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
      quo modo.
    </p>
    <Divider />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
      quo modo.
    </p>
    <Divider dashed />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
      quo modo.
    </p>
  </>
);

DiviDer.propTypes = {
  /**
   * Define initial value for the DiviDer
   */
  initialValue: PropTypes.string.isRequired,
};

export default DiviDer;
