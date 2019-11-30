import React, { useState, Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link'

import Location from '../../atoms/icons/location'

const SimpleInfo = (props) => {

    const icon = () =>{
        if(props.activity==1){
            return(<ActivityWrapper>
            <Bowling src={'/bowling.png'} style={{width:'5.7rem',height:'5.7rem',marginRight:'0rem'}}/>
            <Label style={{marginRight:'6.4rem'}}>볼링</Label>
            </ActivityWrapper>);
        }
        else if(props.activity==2){
            return(<ActivityWrapper>
            <BoardGame src={'/boardGame.png'} style={{width:'5.7rem',height:'5.7rem',marginRight:'0.5rem'}}/>
            <Label style={{marginRight:'3.1rem'}}>보드게임</Label>
            </ActivityWrapper>);
        }
        else if(props.activity==3){
            return(<ActivityWrapper>
            <EscapeRoom src={'/escapeRoom.png'} style={{width:'5.7rem',height:'5.7rem',marginRight:'0.9rem'}}/>
            <Label style={{marginRight:'4.1rem'}}>방탈출</Label>
            </ActivityWrapper>);
        }
    }

    if(props.date.toString().length===1){
        var refinedDate = 0+props.date.toString();
    }
    else{
        var refinedDate = props.date.toString();
    }

    return (
                <SimpleInfoWrapper>

                <Date style={{marginRight:'3.2rem'}}>{props.month}/{refinedDate}</Date>
                {icon()}
                <Time>{props.time}</Time>
                    {/* <Line1>
                        {icon()}
                        <Time>{props.time}</Time>
                        <RoomTitle>{props.room_name}</RoomTitle>
                    </Line1>
                    <Line2>
                        <BoardGame style={{visibility:'hidden',marginRight:'1.5rem'}}></BoardGame>
                        <Time style={{visibility:'hidden'}} >00:00</Time>
                        <PlaceWrapper>
                            <Location style={{marginRight:'0.42rem'}}></Location>
                            <Place>{props.place}</Place>
                        </PlaceWrapper>
                        
                    </Line2> */}
                </SimpleInfoWrapper>
    );
  }

const SimpleInfoWrapper = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
`
const Date = styled.div`
    width: fit-content;
    height: fit-content;
    font-family: NotoSansCJKkr;
    font-size: 1.9rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.89;
    letter-spacing: normal;
    text-align: center;
    color: #2e9267;
`

const ActivityWrapper = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
`
const Label = styled.div`
    width:fit-content;
    height:fit-content;
    font-family: NotoSansCJKkr;
    font-size: 1.5rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.47;
    letter-spacing: normal;
    text-align: center;
    color: #2e9267;
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
    font-size: 1.9rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.89;
    letter-spacing: normal;
    text-align: center;
    color: #2e9267;
`

const RoomTitle = styled.div`
    width: 21.1rem;
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

const PlaceWrapper = styled.div`
    display:flex;
    flex-direction:row;
    width: fit-content;
    height: fit-content;
` 

const Place = styled.span`
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
const Bowling = styled.img`
    width:3.1rem;
    height:3.1rem;
    margin-right:1.5rem;
`
const BoardGame = styled.img`
    width:3.1rem;
    height:3.1rem;
    margin-right:1.5rem;
`
const EscapeRoom = styled.img`
    width:3.1rem;
    height:3.1rem;
    margin-right:1.5rem;
`
const Day = styled.span`
    font-size:1.6rem;
`
export default SimpleInfo