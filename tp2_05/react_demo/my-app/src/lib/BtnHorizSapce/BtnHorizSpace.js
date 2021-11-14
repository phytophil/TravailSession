import React from 'react';
import PropTypes from 'prop-types';
import {Button, Space, Upload, Popconfirm} from 'antd';
import UploadOutlined from '@ant-design/icons';

const SpaceH = ({spaceh}) => (
  <Space>
    Space
    <Button type="primary">Button</Button>
    <Upload>
      <Button>
        <UploadOutlined /> Click to Upload
      </Button>
    </Upload>
    <Popconfirm
      title="Are you sure delete this task?"
      okText="Yes"
      cancelText="No">
      <Button>Confirm</Button>
    </Popconfirm>
  </Space>
);

SpaceH.propTypes = {
  /**
   * Pageheader add title
   */
  spaceh: PropTypes.string.isRequired,
};

export default SpaceH;
