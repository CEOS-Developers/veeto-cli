import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Day from '../molecules/buttons/Day';

const now = new Date();
const nowDate = now.getDate();
const nowYear = now.getFullYear();
const nowMonth = now.getMonth()+1;
const nowDay = now.getDay()+1;
let divisor = 30;
if(nowMonth===1 || nowMonth===3 || nowMonth===5 || nowMonth===7 || nowMonth===8 || nowMonth===10 || nowMonth===12){
    divisor=31;
}
else if(nowMonth===2){
    divisor=28;
}

const getMonth = () =>{
    if((nowDate-nowDay)%divisor+1>divisor-20){
        return(
            <Month>
                {nowMonth} - {nowMonth+1}월
            </Month>
        );
    }
    else{
        return(
            <Month>
                {nowMonth}월
            </Month>
        );
    }
}

const getDateLines = () => {

    if(nowDay===1){
        return(
            <DaysWrapper>
                <DaysRow>
                    <DayIndicator>일</DayIndicator>
                    <DayIndicator>월</DayIndicator>
                    <DayIndicator>화</DayIndicator>
                    <DayIndicator>수</DayIndicator>
                    <DayIndicator>목</DayIndicator>
                    <DayIndicator>금</DayIndicator>
                    <DayIndicator>토</DayIndicator>
                </DaysRow>
                <DaysRow>
                    <Day sunday={true} year={nowYear} month={nowMonth} value={(nowDate-1)%divisor+1}></Day>
                    <Day year={nowYear} month={nowMonth} value={(nowDate)%divisor+1}></Day>
                    <Day year={nowYear} month={nowMonth} value={(nowDate+1)%divisor+1}></Day>
                    <Day year={nowYear} month={nowMonth} value={(nowDate+2)%divisor+1}></Day>
                    <Day year={nowYear} month={nowMonth} value={(nowDate+3)%divisor+1}></Day>
                    <Day year={nowYear} month={nowMonth} value={(nowDate+4)%divisor+1}></Day>
                    <Day year={nowYear} month={nowMonth} value={(nowDate+5)%divisor+1}></Day>
                </DaysRow>
                <DaysRow>
                    <Day sunday={true} year={nowYear} month={nowMonth} value={(nowDate+6)%divisor+1}></Day>
                    <Day year={nowYear} month={nowMonth} value={(nowDate+7)%divisor+1}></Day>
                    <Day year={nowYear} month={nowMonth} value={(nowDate+8)%divisor+1}></Day>
                    <Day year={nowYear} month={nowMonth} value={(nowDate+9)%divisor+1}></Day>
                    <Day year={nowYear} month={nowMonth} value={(nowDate+10)%divisor+1}></Day>
                    <Day year={nowYear} month={nowMonth} value={(nowDate+11)%divisor+1}></Day>
                    <Day year={nowYear} month={nowMonth} value={(nowDate+12)%divisor+1}></Day>
                </DaysRow>
            </DaysWrapper>
        );
    }
    else{
        return(
            <DaysWrapper>
                <DaysRow>
                    <DayIndicator sunday={true}>일</DayIndicator>
                    <DayIndicator>월</DayIndicator>
                    <DayIndicator>화</DayIndicator>
                    <DayIndicator>수</DayIndicator>
                    <DayIndicator>목</DayIndicator>
                    <DayIndicator>금</DayIndicator>
                    <DayIndicator>토</DayIndicator>
                </DaysRow>
                <DaysRow>
                    <Day year={nowYear} month={nowMonth} value={(nowDate-nowDay)%divisor+1}></Day>
                    <Day year={nowYear} month={nowMonth} value={(nowDate-(nowDay-1))%divisor+1}></Day>
                    <Day year={nowYear} month={nowMonth} value={(nowDate-(nowDay-2))%divisor+1}></Day>
                    <Day year={nowYear} month={nowMonth} value={(nowDate-(nowDay-3))%divisor+1}></Day>
                    <Day year={nowYear} month={nowMonth} value={(nowDate-(nowDay-4))%divisor+1}></Day>
                    <Day year={nowYear} month={nowMonth} value={(nowDate-(nowDay-5))%divisor+1}></Day>
                    <Day year={nowYear} month={nowMonth} value={(nowDate-(nowDay-6))%divisor+1}></Day>
                </DaysRow>
                <DaysRow>
                    <Day sunday={true} year={nowYear} month={nowMonth} value={(nowDate-(nowDay-7))%divisor+1}></Day>
                    <Day year={nowYear} month={nowMonth} value={(nowDate-(nowDay-8))%divisor+1}></Day>
                    <Day year={nowYear} month={nowMonth} value={(nowDate-(nowDay-9))%divisor+1}></Day>
                    <Day year={nowYear} month={nowMonth} value={(nowDate-(nowDay-10))%divisor+1}></Day>
                    <Day year={nowYear} month={nowMonth} value={(nowDate-(nowDay-11))%divisor+1}></Day>
                    <Day year={nowYear} month={nowMonth} value={(nowDate-(nowDay-12))%divisor+1}></Day>
                    <Day year={nowYear} month={nowMonth} value={(nowDate-(nowDay-13))%divisor+1}></Day>
                </DaysRow>
                <DaysRow>
                    <Day sunday={true} year={nowYear} month={nowMonth} value={(nowDate-(nowDay-14))%divisor+1}></Day>
                    <Day year={nowYear} month={nowMonth} value={(nowDate-(nowDay-15))%divisor+1}></Day>
                    <Day year={nowYear} month={nowMonth} value={(nowDate-(nowDay-16))%divisor+1}></Day>
                    <Day year={nowYear} month={nowMonth} value={(nowDate-(nowDay-17))%divisor+1}></Day>
                    <Day year={nowYear} month={nowMonth} value={(nowDate-(nowDay-18))%divisor+1}></Day>
                    <Day year={nowYear} month={nowMonth} value={(nowDate-(nowDay-19))%divisor+1}></Day>
                    <Day year={nowYear} month={nowMonth} value={(nowDate-(nowDay-20))%divisor+1}></Day>
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
                {getMonth()}
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

const DayIndicator = styled.div`
    width: 2.6rem;
    height: 2.9rem;
    font-family: NotoSansCJKkr;
    font-size: 1.8rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: normal;
    text-align: center;
    color: ${props => props.sunday? '#b46b16' : '#61b28f'};
    margin-bottom:1.5rem;
`


export { getMonth, getDateLines, MainChooseDate};