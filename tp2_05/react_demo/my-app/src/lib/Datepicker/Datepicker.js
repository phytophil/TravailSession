import React from 'react';
import PropTypes from 'prop-types';
import {DatePicker, Space} from 'antd';

const contentStyle = {
  color: '#fff',
  border: '2px solid rgb(32, 2, 141)',
};

const {RangePicker} = DatePicker;

function onChange(value, dateString) {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
  console.log('onOk: ', value);
}

const Datepicker = ({picker}) => (
  <Space direction="vertical" size={12}>
    <DatePicker
      showTime
      onChange={onChange}
      onOk={onOk}
      picker={picker}
      style={contentStyle}
    />
    <RangePicker
      style={contentStyle}
      showTime={{format: 'HH:mm'}}
      format="YYYY-MM-DD HH:mm"
      onChange={onChange}
      onOk={onOk}
    />
  </Space>
);

Datepicker.propTypes = {
  /**
   * Define initial value for the Datepicker picker (week,month,quarter,year)
   */
  picker: PropTypes.string.isRequired,
};

export default Datepicker;
