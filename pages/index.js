import React, {useState} from 'react'
import Head from 'next/head'
import styled from 'styled-components';

import MainExplanation from '../components/organisms/MainExplanation'
import TutorialSlider from '../components/organisms/Tutorial';
import Start from '../components/molecules/buttons/Start';

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
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Wrapper>
      <MainExplanation tutorial={true} isOpen={isOpen}/>
      <TutorialSlider></TutorialSlider>
      <Start></Start>
      </Wrapper>
      </div>); 
}

export default Home
