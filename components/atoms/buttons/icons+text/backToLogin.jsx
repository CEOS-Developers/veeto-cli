import React, { Component } from 'react';
import styled from 'styled-components';

import Back from "../../icons/back";

const BackToLogin = () => {
    return (
                <Wrapper>
                    <Back style={{width:'2.2rem',height:'2.4rem', marginTop:'0.3rem'}}></Back>
                </Wrapper>
    );
  }
  
const Wrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width:fit-content;
    height:fit-content;
    margin-left:2.2rem;
    margin-top:2.4rem;
`
const Text = styled.span`
    width: fit-content;
    height: 2rem;
    font-family: NotoSansCJKkr;
    font-size: 1.4rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    text-align: center;
    color: #2e9267;
`

export default BackToLogin