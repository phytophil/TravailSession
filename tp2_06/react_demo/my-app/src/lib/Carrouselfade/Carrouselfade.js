import React from 'react';
import {Carousel} from 'antd';

const contentStyle = {
  height: '600px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Carrouselfade = () => (
  <Carousel effect="fade">
    <div>
      <h3 style={contentStyle}>Image 1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>Image 2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>Image 3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>Image 4</h3>
    </div>
  </Carousel>
);

export default Carrouselfade;
