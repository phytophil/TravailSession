import React from 'react';
import PropTypes from 'prop-types';
import {Input, Space} from 'antd';
import {EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';

const Inputvisibility = ({inputeye}) => (
  <Space direction="vertical">
    <Input.Password placeholder="input password" />
    <Input.Password
      placeholder="input password"
      iconRender={visible =>
        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
      }
    />
  </Space>
);

Inputvisibility.propTypes = {
  /**
   * Define initial style for the Inputvisibility
   */
  inputeye: PropTypes.string.isRequired,
};

export default Inputvisibility;
