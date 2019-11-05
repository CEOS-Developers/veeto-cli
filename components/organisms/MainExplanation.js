import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import Image from '../atoms/icons/image';

import Bowling from "../atoms/icons/bowling";
import BoardGame from "../atoms/icons/boardGame";
import EscapeRoom from "../atoms/icons/escapeRoom";

const MainExplanationWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-bottom:0.6875rem;

    width:100%;
    height:fit-content;
    overflow:auto;
`

const ActivitiesWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;

    position:relative;
    left:0.5rem;
    margin-top:1.125rem;
    width:60%;
    height:fit-content;
    overflow:auto;
`
const ActivityWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    width:fit-content;
    height:fit-content;
    overflow:auto;
`

const MainExplanation = (props) => {
    return (
        <MainExplanationWrapper>
            {!props.isOpen && (
                <>
            <Text size={1.5625} weight={300} align={'center'} color={'#2e9267'} lineheight={1.47}>
                    활동하고 싶은 날짜의</Text>
            <Text size={1.5625} weight={300} align={'center'} color={'#2e9267'} lineheight={1.47}>
    숫자를 선택해주세요.</Text></>)}
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
                    <Text size={0.75} weight={'normal'} align={'center'} color={'#2e9267'} lineheight={1.47}>
                        방탈출</Text>
                </ActivityWrapper>
            </ActivitiesWrapper>
        </MainExplanationWrapper>
    );
  }
  
export default MainExplanation