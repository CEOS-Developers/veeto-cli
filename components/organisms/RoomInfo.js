import React, { Component } from 'react';
import styled from 'styled-components';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';

const RoomInfo = (props) => {

    const actName = () => {
        if(props.activity===1) {
            return (<Bold>볼링</Bold>);
        }
        else if(props.activity===2) {
            return (<Bold>보드게임</Bold>);
        }
        else if(props.activity===3) {
            return (<Bold>방탈출</Bold>);
        }
    }

    const icon = () => {
        if(props.activity===1) {
            return (<Bowling src={'/bowling.png'}/>);
        }
        else if(props.activity===2) {
            return (<Bowling src={'/boardGame.png'}/>);
        }
        else if(props.activity===3) {
            return (<Bowling src={'/escapeRoom.png'}/>);
        }
    }

    const month = props.date.slice(5,7);
    const date = props.date.slice(8,10);
    const time = props.time.slice(0,5);

    return (
        <RoomInfoWrapper>
            {icon()}
            <TimeInfo>{month}월 {date}일 {time}에</TimeInfo>
            <ActivityInfo>{actName()}할 사람들</ActivityInfo>
            <hr style={{border:'solid 0.04rem #2e9267', width:'88%', marginTop:'0rem', marginBottom:'4.74rem'}}/>
        </RoomInfoWrapper>
    );
  }
  
const RoomInfoWrapper = styled.div`
   display:flex;
   flex-direction:column;
   align-items:center;

   width:100%;
   height:fit-content;
`

const TimeInfo = styled.div`
    width: fit-content;
    height: fit-content;
    font-family: NotoSansCJKkr;
    font-size: 1.8rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: normal;
    text-align: center;
    color: #2e9267;
    margin-bottom:0.6rem;
`

const ActivityInfo = styled.div`
    width: fit-content;
    height: 3.7rem;
    font-family: NotoSansCJKkr;
    font-size: 2.5rem;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.48;
    letter-spacing: normal;
    text-align: center;
    color: #2e9267;
    margin-bottom:4.15rem;
`
const Bold = styled.span`
    font-weight: 500;
`
const Bowling = styled.img`
    width:5.7rem;
    height:5.7rem;
    margin-top:7.9rem;
    margin-bottom:1.6rem;
`
export default RoomInfo