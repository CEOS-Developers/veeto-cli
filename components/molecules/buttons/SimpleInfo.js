import React, { useState, useEffect, Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import { useRouter } from 'next/router'
import Location from '../../atoms/icons/location'

const SimpleInfo = (props) => {
    const router = useRouter();
    const { date } = router.query;
    const [dayIndex, setDayIndex] = useState(0);

    if(date){props.updateFullDate(date);}

    var day = 0;
    const dayList = ['일','월','화','수','목','금','토'];
    useEffect(() => {
        day = new window.Date(props.fullDate).getDay();
        setDayIndex(day);
    })

    let refinedDate = props.date;

    if(props.date){
        if(props.date.toString().length===1){
            refinedDate = '0'+props.date.toString();
        };
    
        console.log(refinedDate.length);
    }

    const icon = () =>{
        if(props.activity==1){
            return(<ActivityWrapper>
            <Bowling src={'/bowling.png'} style={{width:'5.7rem',height:'5.7rem',marginRight:'0rem'}}/>
            <Label style={{marginRight:'5.4rem'}}>볼링</Label>
            </ActivityWrapper>);
        }
        else if(props.activity==2){
            return(<ActivityWrapper>
            <BoardGame src={'/boardGame.png'} style={{width:'5.7rem',height:'5.7rem',marginRight:'0.5rem'}}/>
            <Label style={{marginRight:'2.1rem'}}>보드게임</Label>
            </ActivityWrapper>);
        }
        else if(props.activity==3){
            return(<ActivityWrapper>
            <EscapeRoom src={'/escapeRoom.png'} style={{width:'5.7rem',height:'5.7rem',marginRight:'0.9rem'}}/>
            <Label style={{marginRight:'3.1rem'}}>방탈출</Label>
            </ActivityWrapper>);
        }
    }

    return (
                <SimpleInfoWrapper>
                {props.fullDate && <Date style={{marginRight:'1rem'}}>{date.slice(5,7)}/{date.slice(8,10)}</Date>}
                {props.fullDate && <Date style={{marginRight:'1.5rem'}}>{dayList[dayIndex]}</Date>}
                {props.month && <Date style={{marginRight:'1rem'}}>{props.month}/{refinedDate}</Date>}
                {props.month && <Date style={{marginRight:'1.5rem'}}>{dayList[props.day]}</Date>}
                {icon()}
                <Time>{props.time}</Time>
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