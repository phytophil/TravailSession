import React from 'react';
import PropTypes from 'prop-types';
import {Carousel} from 'antd';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const SliderA = ({slidera}) => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);

SliderA.propTypes = {
  /**
   * Slider 4 slides
   */
  slidera: PropTypes.string.isRequired,
};

export default SliderA;
