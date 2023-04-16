import React, {Suspense} from 'react';
import Layout from 'layout';
import Spinner from 'components/spinner';

const RenderPage = ({Page}) => {
  return (
    <Layout>
      <Page />
    </Layout>
  );
};

export default RenderPage;
