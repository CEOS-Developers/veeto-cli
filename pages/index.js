import React, {useState} from 'react'
import Head from 'next/head'
import styled from 'styled-components';

import MainExplanation from '../components/organisms/MainExplanation'
import TutorialSlider from '../components/organisms/Tutorial';
import Start from '../components/molecules/buttons/Start';
import KakaoTalk from '../components/molecules/buttons/KakaoTalk';

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
      <MainExplanation tutorial={true}/>
      <TutorialSlider></TutorialSlider>
      <Start></Start>
      <KakaoTalk></KakaoTalk>
      </Wrapper>
      </div>); 
}

const Wrapper = styled.div`
    width: 100%;
    height: fit-content;
    display:flex;
    flex-direction:column;
    align-items:center;
`

export default Home
