import React, {useState} from 'react'
import Head from 'next/head'
import styled from 'styled-components';

import SignIn1 from '../components/templates/SignIn1';
import PageHeader from '../components/organisms/PageHeader';

const Wrapper = styled.div`
    width: 100%;
    height: fit-content;
    display:flex;
    flex-direction:column;
    align-items:center;
`

const Home = () => {
  return (
    <div style={{width:'100%', position:'relative'}}>
      <Head>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
         <title>Veeto - 비토</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Wrapper>
      <PageHeader></PageHeader>
      <SignIn1></SignIn1>
      </Wrapper>
      </div>); 
}

export default Home
