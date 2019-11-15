import React, { Component } from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';

import BoardGame from '../molecules/buttons/BoardGame';

const MainExplanation = (props) => {
    return (
        <Wrapper>
            <MainChooseActWrapper>
                <ServicePhrase2>
                    <span style={{fontFamily: 'NotoSansCJKkr', fontWeight: '500'}}>활동을</span>
                    <span> 선택하기</span>
                </ServicePhrase2>
                <ActivitiesWrapper>
                       <BoardGame></BoardGame>
                       <BoardGame></BoardGame>
                       <BoardGame></BoardGame>
                </ActivitiesWrapper>

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
`

let Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color:rgba(233, 248, 243, 0.37);

    width:100%;
    height: 18.7rem;
    margin-bottom:5.6rem;
`

const MainChooseActWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;

    width:100%;
    height: 16.2rem;
`


const ActivitiesWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;

    margin-top:1.125rem;
    width:fit-content;
    height:fit-content;
    overflow:auto;
`

export default MainExplanation