import React from 'react';
import Layout from 'layout';

const RenderPage = ({Page}) => {
  return (
    <Layout>
      <Page />
    </Layout>
  );
};

export default RenderPage;
