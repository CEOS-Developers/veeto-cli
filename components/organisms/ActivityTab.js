import React, {useState} from 'react'
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router'
import Link from 'next/link';

import Bowling from '../molecules/buttons/Bowling'
import BoardGame from '../molecules/buttons/BoardGame'
import EscapeRoom from '../molecules/buttons/EscapeRoom'

const MainExplanation = (props) => {

    const router = useRouter();
    const { activity } = router.query;

    return (
                <ActivitiesWrapper>
                        <BowlingWrapper isActivitySelected={activity} style={{marginRight:'2.3rem'}}>
                            <Bowling></Bowling>
                        </BowlingWrapper>
                        <BoardGameWrapper isActivitySelected={activity} style={{marginRight:'2.2rem'}}>
                            <BoardGame></BoardGame>
                        </BoardGameWrapper>
                        <EscapeRoomWrapper isActivitySelected={activity}>
                            <EscapeRoom></EscapeRoom>
                        </EscapeRoomWrapper>
                </ActivitiesWrapper>
    );
  }

const ActivitiesWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;

    width:fit-content;
    height:fit-content;
    overflow:auto;
    margin-bottom:1.5rem;
`

const BowlingWrapper = styled.div`
    border-radius: 0.7rem;
    ${props => {
        if(props.isActivitySelected==1){
            return css `background-color:#deefe7`;
        }}
    };
    width:fit-content;
    height:fit-content;
`
const BoardGameWrapper = styled.div`
    border-radius: 0.7rem;
    ${props => {
        if(props.isActivitySelected==2){
            return css `background-color:#deefe7`;
        }}
    };
    width:fit-content;
    height:fit-content;
`
const EscapeRoomWrapper = styled.div`
    border-radius: 0.7rem;
    ${props => {
        if(props.isActivitySelected==3){
            return css `background-color:#deefe7`;
        }}
    };
    width:fit-content;
    height:fit-content;
`

export default MainExplanation