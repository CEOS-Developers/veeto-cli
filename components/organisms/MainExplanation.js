import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from 'reactstrap';
import Link from 'next/link'
import Text from '../atoms/Text';

import TutorialSlider from './Tutorial';
import Logo from "../atoms/icons/logo";
import Carousel from 'react-bootstrap/Carousel';
import { textAlign, display } from '@material-ui/system';

const MainExplanation = (props) => {
    return (
        <MainExplanationWrapper tutorial={props.tutorial}>
            <ServicePhrase1>
                신촌에서 인생 친구를 찾다,
            </ServicePhrase1>
            <Logo style={{width:'41%', height:'4.18rem', marginBottom:'1.52rem'}}></Logo>
            <ServicePhrase2>
                방 선택, 약속 잡기, 만남.
            </ServicePhrase2>
            <ServicePhrase3>
                오직 세 단계로 당신의 인간관계를 비옥하게.
            </ServicePhrase3>
            {!props.tutorial && (
                        <RepresentativeImg src={'/representative.png'} style={{marginBottom:'2.9rem'}}/>
                    )}


            {/* {!props.isOpen && (
                <>
            <Text size={1.5625} weight={300} align={'center'} color={'#2e9267'} lineheight={1.47}>
                    숫자를 선택해주세요.</Text>
            <ActivitiesWrapper>
                <ActivityWrapper>
                    <Bowling></Bowling>
                    <Text size={0.75} weight={'normal'} align={'center'} color={'#2e9267'} lineheight={1.47}>
                        볼링</Text>
                </ActivityWrapper>
                <ActivityWrapper>
                    <BoardGame></BoardGame>
                    <Text size={0.75} weight={'normal'} align={'center'} color={'#2e9267'} lineheight={1.47}>
                        보드게임</Text>
                </ActivityWrapper>
                <ActivityWrapper>
                    <EscapeRoom></EscapeRoom>
                    <Text size={0.75} weight={'normal'} align={'center'} color={'#2e9267'} lineheight={1.47} position={'relative'} right={0.85}>
                        방탈출</Text>
                </ActivityWrapper>
            </ActivitiesWrapper>    
            </>)}
            {props.isOpen && (
                <>
            <selectedActivitiyWrapper>
                <ActivityWrapper>
                    <Bowling></Bowling>
                    <Text size={0.75} weight={'normal'} align={'center'} color={'#2e9267'} lineheight={1.47}>
                        볼링</Text>
                </ActivityWrapper>
            </selectedActivitiyWrapper>    
            </>)} */}
        </MainExplanationWrapper>
    );
  }

  const ServicePhrase1 = styled.div`
    width: fit-content;
    height: fit-content ;
    font-family: NotoSansCJKkr;
    font-size: 1.8rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: normal;
    text-align: center;
    color: #2e9267;
    margin-bottom:1.5rem;
`

const ServicePhrase2 = styled.div`
    margin-top:0.1rem;
    font-size: 2.2rem;
    font-weight: bold;
    color: #2e9267;
`
const ServicePhrase3 = styled.div`
    width: fit-content;
    height: fit-content;
    font-family: NotoSansCJKkr;
    font-size: 1.6rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.88;
    letter-spacing: normal;
    text-align: center;
    color: #439f77;
    margin-bottom : 4.1rem;
`

const RepresentativeImg = styled.img`
    width: 93.3%;
    height: 16.1rem;
    object-fit: contain;
    border-radius: 0.9rem;
`

const MainExplanationWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;

    width:100%;
    height:fit-content;
    overflow:auto;
    margin-top:${props => props.tutorial ? '5.4rem' : '9.4rem'};
`
  
export default MainExplanation