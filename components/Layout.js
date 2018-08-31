import React, { Fragment } from 'react';
import Head from 'next/head';

const Layout = props => (
  <Fragment>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />  
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
      <title>{props.pageTitle || 'Realtime Chat'}</title>
    </Head>
    {props.children}
  </Fragment>
);

export default Layout;