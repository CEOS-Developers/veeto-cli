import React, { useState, Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import Text from '../atoms/Text';
import RoomsInfo from '../molecules/RoomsInfo.'
import Button from '../atoms/Button';
import Image from '../atoms/icons/image';

import ThisWeek from "../atoms/buttons/icons/thisWeek";
import NextWeek from "../atoms/buttons/icons/nextWeek";

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
    box-sizing:border-box;
    margin-botom:1.40625rem;

    display:flex;
    flex-direction:column;
    flex-wrap:nowrap;
    align-items:center;

    overflow:auto;
`

const TodayInfo = styled.div`

    width : 89.6%;
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
    const [dayNum, setDayNum] = useState(1);
    const [roomNum, setRoomNum] = useState(2);
    const [isOpen, setOpen] = useState(true);
    const [thisWeek, setThisWeek] = useState(true);
    const [{data, isLoading, isError}, doFetch] = useDataApi(process.env.API_HOST + '/api');
    
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
                {isOpen && (       
                    <>         
                <DayInfo>{dayNum} 금</DayInfo>
                <RoomInfo>
                    <Text onClick={() => setOpen(!isOpen)} size={0.75} weight={'bold'} align={'center'} color={'#2e9267'}>{roomNum}</Text>
                    <Text onClick={() => setOpen(!isOpen)} size={0.75} weight={'bold'} align={'center'} color={'#2e9267'}>{roomNum-2}</Text>
                    <Text onClick={() => setOpen(!isOpen)} size={0.75} weight={'bold'} align={'center'} color={'#2e9267'}>{roomNum-1}</Text>
                </RoomInfo>
                <Blank></Blank></>)}
                {!isOpen && (
                    <>
                        <Text style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}} bcolor={'#d0eae1'} height={8.625} bordr={1}>
                            <div style={{width:'15.1%',textAlign:'center'}}>
                                <div style={{fontSize:'0.75rem',fontWeight:'500'}}>{dayNum}</div>
                                <div style={{fontSize:'0.75rem',fontWeight:'500'}}>금</div>
                            </div>
                            <Text style={{width:'75.8%', textAlign:'center',height:'5.9375rem', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                            <Link href="/inroom"><a style={{textDecoration:'none', color:'black'}}>
                                <Text style={{width:'90%', display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                                    <div style={{fontSize:'0.8125rem',fontWeight:'bold'}}>11:30</div>
                                    <div style={{fontSize:'0.8125rem',fontWeight:'regular'}}>볼링 마스터들</div>
                                    <div style={{fontSize:'0.8125rem',fontWeight:'900'}}>성비무관</div>
                                    <div style={{fontSize:'0.8125rem',fontWeight:'900'}}>3/4</div>
                                </Text>
                                </a></Link>
                                <Text style={{width:'90%', display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                                    <div style={{fontSize:'0.8125rem',fontWeight:'bold'}}>14:30</div>
                                    <div style={{fontSize:'0.8125rem',fontWeight:'regular'}}>볼링 같이쳐요</div>
                                    <div style={{fontSize:'0.8125rem',fontWeight:'900'}}>성비무관</div>
                                    <div style={{fontSize:'0.8125rem',fontWeight:'900'}}>2/4</div>
                                </Text>
                                <Text style={{width:'90%', display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                                    <div style={{fontSize:'0.8125rem',fontWeight:'bold'}}>20:00</div>
                                    <div style={{fontSize:'0.8125rem',fontWeight:'regular'}}>볼링 처돌이들</div>
                                    <div style={{fontSize:'0.8125rem',fontWeight:'900'}}>성비무관</div>
                                    <div style={{fontSize:'0.8125rem',fontWeight:'900'}}>3/4</div>
                                </Text>
                            </Text>
                        </Text>
                    </>)}
            </TodayInfo>
            <TodayInfo>
            <DayInfo>{dayNum+1} 토</DayInfo>
                <RoomInfo>
                    <Text onClick={() => setOpen(!isOpen)} size={0.75} weight={'bold'} align={'center'} color={'#2e9267'}>{roomNum-2}</Text>
                    <Text onClick={() => setOpen(!isOpen)} size={0.75} weight={'bold'} align={'center'} color={'#2e9267'}>{roomNum-2}</Text>
                    <Text onClick={() => setOpen(!isOpen)} size={0.75} weight={'bold'} align={'center'} color={'#2e9267'}>{roomNum}</Text>
                </RoomInfo>
                <Blank></Blank>
            </TodayInfo>
            <TodayInfo>
            <DayInfo>{dayNum+2} 일</DayInfo>
                <RoomInfo>
                <Text onClick={() => setOpen(!isOpen)} size={0.75} weight={'bold'} align={'center'} color={'#2e9267'}>{roomNum-1}</Text>
                    <Text onClick={() => setOpen(!isOpen)} size={0.75} weight={'bold'} align={'center'} color={'#2e9267'}>{roomNum+1}</Text>
                    <Text onClick={() => setOpen(!isOpen)} size={0.75} weight={'bold'} align={'center'} color={'#2e9267'}>{roomNum-1}</Text>
                </RoomInfo>
                <Blank></Blank>
            </TodayInfo>
            <TodayInfo>
            <DayInfo>{dayNum+3} 월</DayInfo>
                <RoomInfo>
                    <Text onClick={() => setOpen(!isOpen)} size={0.75} weight={'bold'} align={'center'} color={'#2e9267'}>{roomNum}</Text>
                    <Text onClick={() => setOpen(!isOpen)} size={0.75} weight={'bold'} align={'center'} color={'#2e9267'}>{roomNum-2}</Text>
                    <Text onClick={() => setOpen(!isOpen)} size={0.75} weight={'bold'} align={'center'} color={'#2e9267'}>{roomNum}</Text>
                </RoomInfo>
                <Blank></Blank>
            </TodayInfo>
            <TodayInfo>
            <DayInfo>{dayNum+4} 화</DayInfo>
                <RoomInfo>
                    <Text onClick={() => setOpen(!isOpen)} size={0.75} weight={'bold'} align={'center'} color={'#2e9267'}>{roomNum}</Text>
                    <Text onClick={() => setOpen(!isOpen)} size={0.75} weight={'bold'} align={'center'} color={'#2e9267'}>{roomNum-2}</Text>
                    <Text onClick={() => setOpen(!isOpen)} size={0.75} weight={'bold'} align={'center'} color={'#2e9267'}>{roomNum-1}</Text>
                </RoomInfo>
                <Blank></Blank>
            </TodayInfo>
            <TodayInfo>
            <DayInfo>{dayNum+5} 수</DayInfo>
                <RoomInfo>
                    <Text onClick={() => setOpen(!isOpen)} size={0.75} weight={'bold'} align={'center'} color={'#2e9267'}>{roomNum+1}</Text>
                    <Text onClick={() => setOpen(!isOpen)} size={0.75} weight={'bold'} align={'center'} color={'#2e9267'}>{roomNum-2}</Text>
                    <Text onClick={() => setOpen(!isOpen)} size={0.75} weight={'bold'} align={'center'} color={'#2e9267'}>{roomNum+1}</Text>
                </RoomInfo>
                <Blank></Blank>
            </TodayInfo>
            <TodayInfo>
            <DayInfo>{dayNum+6} 목</DayInfo>
                <RoomInfo>
                    <Text onClick={() => setOpen(!isOpen)} size={0.75} weight={'bold'} align={'center'} color={'#2e9267'}>{roomNum}</Text>
                    <Text onClick={() => setOpen(!isOpen)} size={0.75} weight={'bold'} align={'center'} color={'#2e9267'}>{roomNum-2}</Text>
                    <Text onClick={() => setOpen(!isOpen)} size={0.75} weight={'bold'} align={'center'} color={'#2e9267'}>{roomNum-1}</Text>
                </RoomInfo>
                <Blank></Blank>
            </TodayInfo>
            </ScheduleWrapper>
            {thisWeek && (
                <NextWeek onClick={() => {setThisWeek(false),setRoomNum(3),setDayNum(8)}}></NextWeek>
            )}
            {!thisWeek && (
                <ThisWeek onClick={() => {setThisWeek(true),setRoomNum(2),setDayNum(1)}}></ThisWeek>
            )}
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