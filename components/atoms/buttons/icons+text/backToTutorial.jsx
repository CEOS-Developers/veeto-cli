import React, { Component } from 'react';
import styled from 'styled-components';

import Back from "../../icons/back";

const BackToTutorial = () => {
    return (
                <Wrapper>
                    <Back style={{width:'8.476',height:'14.124',marginRight:'0.94rem'}}></Back>
                    <Text>비토 미리보기</Text>
                </Wrapper>
    );
  }
  
const Wrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    width:fit-content;
    height:fit-content;
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

export default BackToTutorial