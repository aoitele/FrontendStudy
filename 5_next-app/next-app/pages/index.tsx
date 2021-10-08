import { NextPage } from 'next';
import { AxiosClient } from '../modules/request';
import React, { useReducer, useState } from 'react';
import Error from 'next/error';
import Layout from '../components/Layout';
import Content from '../components/Content';
import { useRouter } from 'next/router';
interface Props {
  data: Data.ApiResponse;
  errorCode: any;
}

interface Data {
  id: number;
  username: string;
  recipeid: number;
  insert_date: any;
  recipename: string;
  category: string;
  comment: string;
  cookingtime: number;
  explain: string;
  img: string;
  chefid: number;
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
