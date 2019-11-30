import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link'

import Drawer from "../molecules/buttons/Drawer";
import Home from "../molecules/buttons/Home";
import Shop from "../molecules/buttons/Shop";

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
`

const HeaderWrapper = styled.div`
    width:91%;
    display:flex;
    flex-direction:row;
    justify-content:center;

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