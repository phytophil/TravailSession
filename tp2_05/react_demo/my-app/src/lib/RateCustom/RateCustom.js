import React from 'react';
import PropTypes from 'prop-types';
import {Rate} from 'antd';
import {FrownOutlined, MehOutlined, SmileOutlined} from '@ant-design/icons';

const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};

const RateC = ({ratec}) => (
  <>
    <Rate defaultValue={2} character={({index}) => index + 1} />
    <br />
    <Rate defaultValue={3} character={({index}) => customIcons[index + 1]} />
  </>
);

RateC.propTypes = {
  /**
   * Pageheader add title
   */
  ratec: PropTypes.string.isRequired,
};

export default RateC;
