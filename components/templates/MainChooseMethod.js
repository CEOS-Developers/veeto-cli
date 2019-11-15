import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import {MainChooseDate} from '../organisms/MainChooseDate';
import MainChooseAct from '../organisms/MainChooseAct';

const MainChooseMethod = (props) => {
    return (
        <Wrapper>
            <MainChooseDate></MainChooseDate>
            <div style={{width:'fit-content',
                height: '2.5rem',
                fontFamily: 'NotoSansCJKKR',
                fontSize: '1.7rem',
                fontWeight: '300',
                fontStretch: 'normal',
                fontStyle: 'normal',
                lineHeight: '2.12',
                letterSpacing: 'normal',
                textAlign: 'center',
                color: '#2e9267',
                marginBottom: '1.2rem'}}>또는,</div>
            <MainChooseAct></MainChooseAct>
        </Wrapper>
    );
  }

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    width:100%;
    height: fit-content;
`



export default MainChooseMethod