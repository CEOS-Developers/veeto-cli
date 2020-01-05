import React, {useState} from 'react'
import Head from 'next/head'
import styled from 'styled-components';
import Link from 'next/link'

import PageHeader from '../components/organisms/PageHeader'
import MainExplanation from '../components/organisms/MainExplanation'
import LeavesSeparator from '../components/atoms/icons/leavesSeparator'
import MainChooseMethod from '../components/templates/MainChooseMethod'

const Wrapper = styled.div`
    width: 100%;
    height: fit-content;
    display:flex;
    flex-direction:column;
    align-items:center;
`


const Home = () => {

  const [isOpen, setOpen] = useState(false)
  
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
      <MainExplanation />
      <LeavesSeparator style={{marginBottom:'2.4rem'}}></LeavesSeparator>
      <MainChooseMethod></MainChooseMethod>
      </Wrapper>
      </div>); 
}

Home.getInitialProps = () => {
  return {};
}

export default Home
