import React from 'react';
import 'antd/dist/antd.css';
import {Collapse} from 'antd';

const {Panel} = Collapse;

function callback(key) {
  console(key);
}

const text1 = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const text2 = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const text3 = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

return (
  (
    <Collapse defaultActiveKey={['1']} onChange={callback}>
      <Panel header="Premier" key="1">
        <p>{text1}</p>
      </Panel>
      <Panel header="Deuxième" key="2">
        <p>{text2}</p>
      </Panel>
      <Panel header="Troisième" key="3">
        <p>{text3}</p>
      </Panel>
    </Collapse>
  ),
  document.getElementById('container')
);
