import React from 'react';
import {PageHeader} from 'antd';

const Pageheader = () => (
  <PageHeader
    className="site-page-header"
    onBack={() => null}
    title="Titre"
    subTitle="Ceci est un sous-titre"
  />
);

export default Pageheader;
