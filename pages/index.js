import React, {useState} from 'react'
import Head from 'next/head'
import Link from 'next/link'

import MainHeader from '../components/organisms/MainHeader'
import MainExplanation from '../components/organisms/MainExplanation'
import MonthIndicator from '../components/atoms/MonthIndicator'
import MainSchedule from '../components/organisms/MainSchedule'
import MainFooter from '../components/organisms/MainFooter'

const Home = () => {

  const [isOpen, setOpen] = useState(false)
  
  return (
    <div style={{width:'100%', position:'relative'}}>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <MainHeader></MainHeader>
      <MainExplanation isOpen={isOpen}/>
      <MonthIndicator index={0} data-content="10월"/>
      <MonthIndicator index={3} data-content="11월"/>
      <MainSchedule setOpen={setOpen}/>
      <MainFooter></MainFooter>
      <p onClick={() => setOpen(!isOpen)}>열림닫힘</p>
      </div>); 
}

export default Home
