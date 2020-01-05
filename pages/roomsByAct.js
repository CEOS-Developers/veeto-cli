import React, {useState} from 'react'
import Head from 'next/head'
import styled from 'styled-components';
import Link from 'next/link'

import PageHeader from '../components/organisms/PageHeader'
import RoomsChooseAct from '../components/organisms/RoomsChooseAct'
import RoomListByAct from '../components/organisms/RoomListByAct'

const Wrapper = styled.div`
    width: 100%;
    height: fit-content;
    display:flex;
    flex-direction:column;
    align-items:center;
`


const RoomsByAct = () => {

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
      <RoomsChooseAct></RoomsChooseAct>
      <RoomListByAct></RoomListByAct>
      </Wrapper>
      </div>); 
}

RoomsByAct.getInitialProps = () => {
  return {};
}

export default RoomsByAct
