import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {Popover, Button} from 'antd';

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

ReactDOM.render(
  <Popover content={content} title="Title">
    <Button type="primary">Hover me</Button>
  </Popover>,
  document.getElementById('container'),
);

export default Popover;