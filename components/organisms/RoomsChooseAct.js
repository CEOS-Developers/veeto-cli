import React, { Component } from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';


import ActivityTab from '../organisms/ActivityTab';

const MainExplanation = (props) => {
    return (
        <Wrapper>
            <MainChooseActWrapper>
                <ServicePhrase2>
                    <span style={{fontFamily: 'NotoSansCJKkr', fontWeight: '500'}}>활동을</span>
                    <span> 선택하기</span>
                </ServicePhrase2>
                <hr style={{border:'solid 0.04rem #2e9267', width:'88%', marginTop:'0rem', marginBottom:'1.95rem'}}/>
                <ActivityTab></ActivityTab>
                <hr style={{border:'solid 0.04rem #2e9267', width:'88%', marginTop:'1.95rem'}}/>
            </MainChooseActWrapper>
        </Wrapper>
    );
  }
  
const ServicePhrase2 = styled.div`
    width: fit-content;
    height: 3.7rem;
    font-family: NotoSansCJKKR;
    font-size: 2.5rem;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: normal;
    text-align: center;
    color: #2e9267;
    margin-bottom:1.95rem;
`

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    width:100%;
    height: fit-content;
`

const MainChooseActWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;

    width:100%;
    height: fit-content;
    margin-bottom:3.45rem;
`

export default MainExplanation