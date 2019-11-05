import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components';

import Text from '../components/atoms/Text';
import MainHeader from '../components/organisms/MainHeader'
import InRoomInfo from '../components/organisms/InRoomInfo'
import InRoomParticipants from '../components/organisms/InRoomParticipants'
import InRoomFooter from '../components/organisms/InRoomFooter'

const InRoomWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    width:100%;
    height:50.75rem;
    overflow:auto;
`

const InRoom = () => (
  <div style={{width:'100%', position:'relative'}}>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <InRoomWrapper>
    <MainHeader></MainHeader>
    <InRoomInfo></InRoomInfo>
    <InRoomParticipants></InRoomParticipants>
    <InRoomFooter></InRoomFooter>
    </InRoomWrapper>
    </div>
)

export default InRoom
