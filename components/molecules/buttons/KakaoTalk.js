import React, { useState, Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link'

const KakaoTalk = () => {
    return(
        <KakaoWrapper target="_blank" href="https://pf.kakao.com/_tTcQT" style={{textDecoration:'none'}}>
            <KakaoLabel>카톡 문의하기</KakaoLabel>
            <KakaoImg src={'/kakao.png'}/>
        </KakaoWrapper>
    );
}

export default KakaoTalk;

const KakaoWrapper = styled.a`
    display:flex;
    flex-direction: row;
    align-items:center;
    margin-bottom:7.9rem;
`

const KakaoLabel = styled.div`
    width: fit-contnet;
    height: fit-content;
    font-family: NotoSansCJKkr;
    font-size: 1.2rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.83;
    letter-spacing: normal;
    text-align: center;
    color: #2e9267;
    margin-right:0.8rem;
`

const KakaoImg = styled.img`
    width:2.5rem;
    height:2.5rem;
`
