import React from 'react';
import {List, Typography, Divider} from 'antd';
import 'antd/dist/antd.css'; 

const data=[
    "2021",
    "19",
    "10",


]

const Componente3 = () => {

    return (<List
        size="small"
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={item => <List.Item>{item}</List.Item>}
    />);

}



export default Componente3;