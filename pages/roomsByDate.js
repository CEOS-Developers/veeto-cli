import React from 'react'
import Head from 'next/head'
import styled from 'styled-components';

import PageHeader from '../components/organisms/PageHeader'
import RoomsChooseDate from '../components/organisms/RoomsChooseDate'
import RoomListByDate from '../components/organisms/RoomListByDate'

const Wrapper = styled.div`
    width: 100%;
    height: fit-content;
    display:flex;
    flex-direction:column;
    align-items:center;
`


const RoomsByDate = () => {
  
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
      <RoomsChooseDate></RoomsChooseDate>
      <RoomListByDate></RoomListByDate>
      </Wrapper>
      </div>); 
}

RoomsByDate.getInitialProps = () => {
      return {};
}

export default RoomsByDate
