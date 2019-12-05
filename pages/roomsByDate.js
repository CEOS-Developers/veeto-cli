import React, {useState} from 'react'
import Head from 'next/head'
import styled from 'styled-components';
import Link from 'next/link'

import PageHeader from '../components/organisms/PageHeader'
import RoomsChooseDate from '../components/organisms/RoomsChooseDate'
import RoomListByDate from '../components/organisms/RoomListByDate'
import MainSchedule from '../components/organisms/MainSchedule'
import MainFooter from '../components/organisms/MainFooter'

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
        <title>Home</title>
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

const RepresentativeImg = styled.img`
    width: 93.3%;
    height: 16.1rem;
    object-fit: contain;
    border-radius: 0.9rem;
    margin-top:3.1rem;
    margin-bottom:3.1rem;
`

export default RoomsByDate
