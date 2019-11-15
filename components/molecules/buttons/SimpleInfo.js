import React, { useState, Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import Bowling from '../../atoms/buttons/icons/bowling';
import BoardGame from '../../atoms/buttons/icons/boardGame';
import EscapeRoom from '../../atoms/buttons/icons/escapeRoom';




const SimpleInfo = (props) => {
    const activity = () =>{
        if(props.act===1){
            return(<Bowling style={{marginRight:'1.5rem'}}></Bowling>);
        }
        else if(props.act===2){
            return(<BoardGame style={{marginRight:'1.5rem'}}></BoardGame>);
        }
        else if(props.act===3){
            return(<EscapeRoom style={{marginRight:'1.5rem'}}></EscapeRoom>);
        }
    }

    return (
                <SimpleInfoWrapper>
                    <Line1>
                        {activity()}
                        <Time>{props.time}</Time>
                        <RoomTitle>{props.roomTitle}</RoomTitle>
                    </Line1>
                    <Line2>
                        <BoardGame style={{visibility:'hidden',marginRight:'1.5rem'}}></BoardGame>
                        <Time style={{visibility:'hidden'}} >00:00</Time>
                        <Place>{props.place}</Place>
                    </Line2>
                </SimpleInfoWrapper>
    );
  }

const SimpleInfoWrapper = styled.div`
    display:flex;
    flex-direction:column;

    width:100%;
    height: fit-content;
`

const Line1 = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  width:fit-content;
  height:fit-content;
`
const Line2 = styled.div`
  display:flex;
  flex-direction:row;
  width:fit-content;
  height:fit-content;
`

const Time = styled.div`
    width: fit-content;
    height: fit-content;
    font-family: NotoSansCJKkr;
    font-size: 1.6rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.25;
    letter-spacing: normal;
    text-align: center;
    color: #2e9267;
    margin-right:1.8rem;
`

const RoomTitle = styled.div`
    width: fit-content;
    height: fit-content;
    font-family: NotoSansCJKkr;
    font-size: 1.6rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.25;
    letter-spacing: normal;
    text-align: left;
    color: #2e9267;
`

const Place = styled.div`
    width: fit-content;
    height: fit-content;
    font-family: NotoSansCJKkr;
    font-size: 1.3rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: center;
    color: #2e9267;
` 

export default SimpleInfo