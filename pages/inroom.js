import React, {useState} from 'react'
import Head from 'next/head'
import styled from 'styled-components';
import Link from 'next/link'

import PageHeader from '../components/organisms/PageHeader'
import RoomInfo from '../components/organisms/RoomInfo'
import ParticipantsInfo from '../components/organisms/ParticipantsInfo'
import GotoMain from '../components/molecules/buttons/GotoMain'
import LeavesSeparator from '../components/atoms/icons/leavesSeparator'
import MainChooseMethod from '../components/templates/MainChooseMethod'

const Wrapper = styled.div`
    width: 100%;
    height: fit-content;
    display:flex;
    flex-direction:column;
    align-items:center;
`


const inroom = () => {
  
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
        <RoomInfo></RoomInfo>
        <ParticipantsInfo></ParticipantsInfo>
        <GotoMain></GotoMain>
      </Wrapper>
      </div>); 
}

export default inroom
