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
                <ActivityTab></ActivityTab>
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

const SelectedActivityWrapper = styled.div`
    border-radius: 0.7rem;
    background-color: ${props => props.selected ? '#deefe7' : ''};;
    width:fit-content;
    height:fit-content;
`

const ActivityWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    width:7.1rem;
    height:9.5rem;

    margin-top:0.7rem;
    margin-left:0.7rem;
    margin-right:0.5rem;
    margin-bottom:0.74rem;
`

const BowlingWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    width:7.1rem;
    height:9.5rem;

    margin-top:0.7rem;
    margin-left:0.7rem;
    margin-right:0.5rem;
    margin-bottom:0.74rem;
`

const BoardGameWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    width:7.1rem;
    height:9.5rem;

    margin-top:0.7rem;
    margin-left:0.7rem;
    margin-right:0.5rem;
    margin-bottom:0.74rem;
`

const EscapeRoomWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    width:7.1rem;
    height:9.5rem;

    margin-top:0.7rem;
    margin-left:0.7rem;
    margin-right:0.5rem;
    margin-bottom:0.74rem;
`

const Bowling = styled.img`
    width:7.1rem;
    height:7.1rem;
`

const BowlingLabel = styled.div`
    margin-left:2.2rem;
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

const BoardGame = styled.img`
    width:7.0rem;
    height:7.1rem;
`

const BoardGameLabel = styled.div`
    margin-left:0.8rem;
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

const EscapeRoom = styled.img`
    width:7.1rem;
    height:7.1rem;
`

const EscapeRoomLabel = styled.div`
    margin-left:1.4rem;
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

export default MainExplanation