import React, { Component } from 'react';
import styled from 'styled-components';
import button from '../atoms/Button'
import Link from 'next/link'

const HeaderWrapper = styled.div`
    text-align:center;
    margin-top:2.125rem;
    margin-bottom:2rem;
    width:100%;
    height:4.8125rem;
`

const Logo = styled.img`
    margin-top:1.1875rem;
    width:7.6875rem;
    height:2.6875rem;
`

const MainHeader = () => {
    return (
        <HeaderWrapper>
            <Link href='/'>
                <a>
                    <Logo src={'/logo.png'}/>
                </a>
            </Link>
        </HeaderWrapper>
    );
  }
  
export default MainHeader