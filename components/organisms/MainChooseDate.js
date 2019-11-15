import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Day from '../molecules/buttons/Day';

const week = ['일', '월', '화', '수', '목', '금', '토'];

const getDateLines = () => {
    const now = new Date();
    const nowDate = now.getDate();
    const nowDay = now.getDay();
    if(nowDay===0){
        return(
            <DaysWrapper>
                <DaysRow>
                    <Day value={nowDate}></Day>
                    <Day value={nowDate+1}></Day>
                    <Day value={nowDate+2}></Day>
                    <Day value={nowDate+3}></Day>
                    <Day value={nowDate+4}></Day>
                    <Day value={nowDate+5}></Day>
                    <Day value={nowDate+6}></Day>
                </DaysRow>
                <DaysRow>
                    <Day value={nowDate+7}></Day>
                    <Day value={nowDate+8}></Day>
                    <Day value={nowDate+9}></Day>
                    <Day value={nowDate+10}></Day>
                    <Day value={nowDate+11}></Day>
                    <Day value={nowDate+12}></Day>
                    <Day value={nowDate+13}></Day>
                </DaysRow>
            </DaysWrapper>
        );
    }
    else{
        return(
            <DaysWrapper>
                <DaysRow>
                    <Day value={nowDate-nowDay}></Day>
                    <Day value={nowDate-(nowDay-1)}></Day>
                    <Day value={nowDate-(nowDay-2)}></Day>
                    <Day value={nowDate-(nowDay-3)}></Day>
                    <Day value={nowDate-(nowDay-4)}></Day>
                    <Day value={nowDate-(nowDay-5)}></Day>
                    <Day value={nowDate-(nowDay-6)}></Day>
                </DaysRow>
                <DaysRow>
                    <Day sunday={true} value={nowDate-(nowDay-7)}></Day>
                    <Day value={nowDate-(nowDay-8)}></Day>
                    <Day value={nowDate-(nowDay-9)}></Day>
                    <Day value={nowDate-(nowDay-10)}></Day>
                    <Day value={nowDate-(nowDay-11)}></Day>
                    <Day value={nowDate-(nowDay-12)}></Day>
                    <Day value={nowDate-(nowDay-13)}></Day>
                </DaysRow>
                <DaysRow>
                    <Day sunday={true} value={nowDate-(nowDay-14)}></Day>
                    <Day value={nowDate-(nowDay-15)}></Day>
                    <Day value={nowDate-(nowDay-16)}></Day>
                    <Day value={nowDate-(nowDay-17)}></Day>
                    <Day value={nowDate-(nowDay-18)}></Day>
                    <Day value={nowDate-(nowDay-19)}></Day>
                    <Day value={nowDate-(nowDay-20)}></Day>
                </DaysRow>
            </DaysWrapper>
        );
    }

}


const MainChooseDate = (props) => {
    return (
        <Wrapper>
            <MainChooseDateWrapper>
                <Title>
                    <span style={{fontFamily: 'NotoSansCJKkr', fontWeight: '500'}}>날짜를</span>
                    <span> 선택하기</span>
                </Title>
                <Month>
                    11월
                </Month>
                {getDateLines()}
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
            </MainChooseDateWrapper>
        </Wrapper>
    );
  }


const Title = styled.div`
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
    margin-top:1.1rem;
    margin-bottom:1.2rem;
`
const Month = styled.div`
    width: fit-content;
    height: 2.9rem;
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

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    align-items:center;
    magin-bottom:0.6rem;

    width:100%;
    height: fit-content;
    background-color: rgba(233, 248, 243, 0.37);
`

const MainChooseDateWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;

    width:100%;
    height: fit-content;
    margin-bottom:1.7rem;
`
const DaysWrapper = styled.div`
    width:83%;
    height:fit-content;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
`
const DaysRow = styled.div`
    width:100%;
    height:fit-content;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`


export { getDateLines, MainChooseDate };