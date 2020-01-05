import React, { Component } from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';

import ActivityTab from '../organisms/ActivityTab';

const MainChooseAct = (props) => {
    return (
        <Wrapper>
            <MainChooseActWrapper>
                <ServicePhrase2>
                    <span style={{fontFamily: 'NotoSansCJKkr', fontWeight: '500'}}>활동을</span>
                    <span> 선택하기</span>
                </ServicePhrase2>
                <ActivityTab></ActivityTab>
            </MainChooseActWrapper>
        </Wrapper>
    );
  }


const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color:rgba(233, 248, 243, 0.37);

    width:100%;
    height: fit-content;
    margin-bottom:5.6rem;
`

const MainChooseActWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;

    width:100%;
    height: fit-content;
`

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
    margin-top:1.2rem;
    margin-bottom:2.1rem;
`
export default MainChooseAct