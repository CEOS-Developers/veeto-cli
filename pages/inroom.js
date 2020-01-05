import React, {useState} from 'react'
import Head from 'next/head'
import styled from 'styled-components';
import Link from 'next/link'

import {useDataApi} from '../lib/hooks'
import { useRouter } from 'next/router'
import PageHeader from '../components/organisms/PageHeader'
import RoomInfo from '../components/organisms/RoomInfo'
import ParticipantsInfo from '../components/organisms/ParticipantsInfo'
import GotoMain from '../components/molecules/buttons/GotoMain'
import LeavesSeparator from '../components/atoms/icons/leavesSeparator'
import MainChooseMethod from '../components/templates/MainChooseMethod'
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';

const Wrapper = styled.div`
    width: 100%;
    height: fit-content;
    display:flex;
    flex-direction:column;
    align-items:center;
`


const inroom = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const [{data, isLoading, isError}, doFetch] = useDataApi(`https://d2gv8trg60k042.cloudfront.net/api/roomDetail/${id}`);
  
  if(data){
    const {members, date, time, activity} = data;
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
          <RoomInfo date={date} time={time} activity={activity}></RoomInfo>
          <ParticipantsInfo members={members}></ParticipantsInfo>
          <GotoMain></GotoMain>
        </Wrapper>
        </div>); 
  }
  return <div>loading...</div>
  }

  inroom.getInitialProps = () => {
    return {};
  }
export default inroom
