import React, { useState, Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import Text from '../atoms/Text';
import RoomsInfo from '../molecules/RoomsInfo.'
import Button from '../atoms/Button';
import Image from '../atoms/icons/image';

import {useDataApi} from '../../lib/hooks'

const MainScheduleWrapper = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    flex-wrap:nowrap;
    align-items:center;
`

const ScheduleWrapper = styled.div`
    width:89.6%;
    height:23.46875rem;
    box-sizing:border-box;

    display:flex;
    flex-direction:column;
    flex-wrap:nowrap;
    align-items:center;

    overflow:auto;
`

const TodayInfo = styled.div`

    width : 89.6%;
    height:2.1875rem;
    box-sizing:border-box;

    display:flex;
    flex-direction:row;
    flex-wrap:nowrap;
    justify-content:space-between;
    align-items:center;

    margin-bottom:1.9375rem;
    overflow:auto;
`

const Blank = styled.div`
    width:9.9%;
    background-color:#ffffff;
    padding:0.2rem
    border-radius:1.25rem
`

const DayInfo = styled.div`
    width:9.9%;
    font-size:0.75rem;
    font-weight:500;
    text-align:center;
    color:#000000;
    background-color:#e9f8f3
    padding:0.2rem
    border-radius:1.25rem
`

const RoomInfo = styled.div`
    width:60%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    flex-wrap:nowrap;
    overflow:auto;
`
const week = ['일', '월', '화', '수', '목', '금', '토'];

const MainSchedule = (props) => {
    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedActivity, setSelectedActivity] = useState(null);
    const [roomNum, setRoomNum] = useState(2);
    const [{data, isLoading, isError}, doFetch] = useDataApi('http://ec2-18-191-248-241.us-east-2.compute.amazonaws.com:8000/api');
    
    const [isOpen, setOpen] = useState(false);
const getScheduleLines = () => {
    return props.data.map((value, index) => {
        const myDate = new Date(value.date.year, value.date.month, value.date.day);
        const dayOfWeek = week[myDate.getDay()];
        if(value.date.day===selectedDay) {
            return <RoomsInfo date={value.date} activity={selectedActivity}/>
        }
        return (
            <TodayInfo key={index} onClick={() => {props.setOpen(true); setSelectedDay(value.date.day)}}>
                <DayInfo>{`${value.date.day} ${dayOfWeek}`}</DayInfo>
                <RoomInfo>
                    <Text onClick={() => setSelectedActivity(1)} size={0.75} weight={'bold'} align={'center'} color={'#2e9267'}>{value.rooms[0]}</Text>
                    <Text onClick={() => setSelectedActivity(2)} size={0.75} weight={'bold'} align={'center'} color={'#2e9267'}>{value.rooms[1]}</Text>
                    <Text onClick={() => setSelectedActivity(3)} size={0.75} weight={'bold'} align={'center'} color={'#2e9267'}>{value.rooms[2]}</Text>
                </RoomInfo>
                <Blank></Blank>
            </TodayInfo>
        );
    })
}

//   if(isLoading) {
//      return (<div>loading...</div>)
//   }
//   if(isError) {
//     return (<div>error!</div>)
//   }
//   if(data) {
//     console.log(data);
    return (
        <MainScheduleWrapper>
            <ScheduleWrapper>
            <TodayInfo onClick={() => props.setOpen(true)}>
                <DayInfo>29 화</DayInfo>
                <RoomInfo>
                    <Text onClick={() => setOpen(!isOpen)} size={0.75} weight={'bold'} align={'center'} color={'#2e9267'}>{roomNum}</Text>
                    <Text onClick={() => setOpen(!isOpen)} size={0.75} weight={'bold'} align={'center'} color={'#2e9267'}>{roomNum-2}</Text>
                    <Text onClick={() => setOpen(!isOpen)} size={0.75} weight={'bold'} align={'center'} color={'#2e9267'}>{roomNum-1}</Text>
                </RoomInfo>
                <Blank></Blank>
            </TodayInfo>
            <TodayInfo>
            <DayInfo>30 수</DayInfo>
                <RoomInfo>
                    <Text onClick={() => setOpen(!isOpen)} size={0.75} weight={'bold'} align={'center'} color={'#2e9267'}>{roomNum-2}</Text>
                    <Text onClick={() => setOpen(!isOpen)} size={0.75} weight={'bold'} align={'center'} color={'#2e9267'}>{roomNum-2}</Text>
                    <Text onClick={() => setOpen(!isOpen)} size={0.75} weight={'bold'} align={'center'} color={'#2e9267'}>{roomNum}</Text>
                </RoomInfo>
                <Blank></Blank>
            </TodayInfo>
            <TodayInfo>
            <DayInfo>31 목</DayInfo>
                <RoomInfo>
                <Text onClick={() => setOpen(!isOpen)} size={0.75} weight={'bold'} align={'center'} color={'#2e9267'}>{roomNum-1}</Text>
                    <Text onClick={() => setOpen(!isOpen)} size={0.75} weight={'bold'} align={'center'} color={'#2e9267'}>{roomNum+1}</Text>
                    <Text onClick={() => setOpen(!isOpen)} size={0.75} weight={'bold'} align={'center'} color={'#2e9267'}>{roomNum-1}</Text>
                </RoomInfo>
                <Blank></Blank>
            </TodayInfo>
            <TodayInfo>
            <DayInfo>1 금</DayInfo>
                <RoomInfo>
                    <Text onClick={() => setOpen(!isOpen)} size={0.75} weight={'bold'} align={'center'} color={'#2e9267'}>{roomNum}</Text>
                    <Text onClick={() => setOpen(!isOpen)} size={0.75} weight={'bold'} align={'center'} color={'#2e9267'}>{roomNum-2}</Text>
                    <Text onClick={() => setOpen(!isOpen)} size={0.75} weight={'bold'} align={'center'} color={'#2e9267'}>{roomNum}</Text>
                </RoomInfo>
                <Blank></Blank>
            </TodayInfo>
            <TodayInfo>
            <DayInfo>2 토</DayInfo>
                <RoomInfo>
                    <Text onClick={() => setOpen(!isOpen)} size={0.75} weight={'bold'} align={'center'} color={'#2e9267'}>{roomNum}</Text>
                    <Text onClick={() => setOpen(!isOpen)} size={0.75} weight={'bold'} align={'center'} color={'#2e9267'}>{roomNum-2}</Text>
                    <Text onClick={() => setOpen(!isOpen)} size={0.75} weight={'bold'} align={'center'} color={'#2e9267'}>{roomNum-1}</Text>
                </RoomInfo>
                <Blank></Blank>
            </TodayInfo>
            <TodayInfo>
            <DayInfo>3 일</DayInfo>
                <RoomInfo>
                    <Text onClick={() => setOpen(!isOpen)} size={0.75} weight={'bold'} align={'center'} color={'#2e9267'}>{roomNum+1}</Text>
                    <Text onClick={() => setOpen(!isOpen)} size={0.75} weight={'bold'} align={'center'} color={'#2e9267'}>{roomNum-2}</Text>
                    <Text onClick={() => setOpen(!isOpen)} size={0.75} weight={'bold'} align={'center'} color={'#2e9267'}>{roomNum+1}</Text>
                </RoomInfo>
                <Blank></Blank>
            </TodayInfo>
            <TodayInfo>
            <DayInfo>4 월</DayInfo>
                <RoomInfo>
                    <Text onClick={() => setOpen(!isOpen)} size={0.75} weight={'bold'} align={'center'} color={'#2e9267'}>{roomNum}</Text>
                    <Text onClick={() => setOpen(!isOpen)} size={0.75} weight={'bold'} align={'center'} color={'#2e9267'}>{roomNum-2}</Text>
                    <Text onClick={() => setOpen(!isOpen)} size={0.75} weight={'bold'} align={'center'} color={'#2e9267'}>{roomNum-1}</Text>
                </RoomInfo>
                <Blank></Blank>
            </TodayInfo>
            </ScheduleWrapper>
            <button onClick={() => setRoomNum(3)}></button>
        </MainScheduleWrapper>
    );
//     return (
        
//         <MainScheduleWrapper>
//             <ScheduleWrapper>
//                 {getScheduleLines()}
//             </ScheduleWrapper>
//             </MainScheduleWrapper>
//     )
// }
return <div>예외!</div>
  }
  
export default MainSchedule;