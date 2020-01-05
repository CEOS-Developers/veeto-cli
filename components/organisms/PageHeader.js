import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link'

import Home from "../molecules/buttons/Home";

const Wrapper = styled.div`
    position:fixed;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color:#ffffff;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    width:100%;
    height:4.5rem;
    z-index:10;
`

const HeaderWrapper = styled.div`
    width:91%;
    display:flex;
    flex-direction:row;
    justify-content:center;
    background-color:#ffffff;

`

const PageHeader = () => {
    return (
        <Wrapper>
            <HeaderWrapper>
                <Home></Home>
            </HeaderWrapper>
        </Wrapper>
    );
  }
  
export default PageHeader