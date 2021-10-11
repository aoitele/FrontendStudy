import { NextPage } from 'next';
import { AxiosClient } from '../modules/request';
import React, { useReducer, useState } from 'react';
import Error from 'next/error';
import Layout from '../components/layout/Layout';
import Content from '../components/mainContents/Content';
import { useRouter } from 'next/router';
interface Props {
  data: Data.ApiResponse;
  errorCode: any;
}

const Page: React.FC<Props> = ({ errorCode }) => {
  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  return (
    <div>
      <Layout>
        <main>
          <h1>welcome!</h1>
        </main>
      </Layout>
    </div>
  );
};

export default Page;
