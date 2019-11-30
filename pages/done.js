import React from 'react'
import Head from 'next/head'
import styled, {css} from 'styled-components';

import GotoMain from '../components/molecules/buttons/GotoMain'

const Home = () => (
  <Wrapper>
    <Head>
      <title>제출 완료!</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Done1>제출이 완료되었습니다!</Done1>
    <Done2>인원이 모두 차 방이 확정되면<br/>문자로 알림 드리겠습니다.</Done2>
    <GotoMain></GotoMain>
   </Wrapper>
)

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`

const Done1 = styled.div`
    width: fit-content;
    height: fit-content;
    font-family: NotoSansCJKkr;
    font-size: 2.3rem;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: 0.115rem;
    text-align: center;
    color: #2e9267;
    margin-top:31.9rem;
    margin-bottom:1.9rem;
`

const Done2 = styled.div`
    width: fit-content;
    height: fit-content;
    font-family: NotoSansCJKkr;
    font-size: 1.7rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.59;
    letter-spacing: normal;
    text-align: center;
    color: #2e9267;
    margin-bottom:30rem;
`

export default Home
