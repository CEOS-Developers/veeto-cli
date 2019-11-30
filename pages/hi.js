import React, {useState} from 'react'
import Head from 'next/head'
import styled from 'styled-components';

import SignIn1 from '../components/templates/SignIn1';

const Home = () => {
  return (
    <div style={{width:'100%', position:'relative'}}>
      <Head>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <SignIn1></SignIn1>
      </div>); 
}

export default Home
