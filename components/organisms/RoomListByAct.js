import React, { useState, Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import { useRouter } from 'next/router'

import {useDataApi} from '../../lib/hooks'
import EnterRoomModal from '../templates/EnterRoomModal';
import EnterRoomByDate from '../organisms/EnterRoomByDate';
import GotoRoomByDate from '../molecules/buttons/gotoRoomByDate';

const RoomListByDate = (props) => {
    const [isModal1Open, setModal1Open] = useState(false); const closeModal1 = () => { setModal1Open(!isModal1Open); }
    const [isModal2Open, setModal2Open] = useState(false); const closeModal2 = () => { setModal2Open(!isModal2Open); }
    const [isModal3Open, setModal3Open] = useState(false); const closeModal3 = () => { setModal3Open(!isModal3Open); }
    const [isModal4Open, setModal4Open] = useState(false); const closeModal4 = () => { setModal4Open(!isModal4Open); }
    const [isModal5Open, setModal5Open] = useState(false); const closeModal5 = () => { setModal5Open(!isModal5Open); }
    const [isModal6Open, setModal6Open] = useState(false); const closeModal6 = () => { setModal6Open(!isModal6Open); }
    
    const router = useRouter();
    const { activity } = router.query;

    const now = new Date();
    const nowDate = now.getDate();
    const nowYear = now.getFullYear();
    const nowMonth = now.getMonth()+1;
    const nowDay = now.getDay();

    const [isModalOpen, setModalOpen] = useState(false);
    const [{data, isLoading, isError}, doFetch] = useDataApi('https://d2gv8trg60k042.cloudfront.net/api/roomList/1');



    const getScheduleLines = () => {
        // return data.map((value, index) => {
            return(
                <>
                    <RoomWrapper onClick={closeModal1}><EnterRoomByDate activity={activity} year={nowYear} month={nowMonth} date={nowDate} day={nowDay%7} time={'19:00'}></EnterRoomByDate></RoomWrapper>
                    <EnterRoomModal onClick={closeModal1} isModalOpen={isModal1Open} year={nowYear} month={nowMonth} date={nowDate} day={nowDay%7} activity={activity} time={'19:00'}></EnterRoomModal>
                    <RoomWrapper onClick={closeModal2}><EnterRoomByDate activity={activity} year={nowYear} month={nowMonth} date={nowDate+1} day={(nowDay+1)%7} time={'19:00'}></EnterRoomByDate></RoomWrapper>
                    <EnterRoomModal onClick={closeModal2} isModalOpen={isModal2Open} year={nowYear} month={nowMonth} date={nowDate+1} day={(nowDay+1)%7} activity={activity} time={'19:00'}></EnterRoomModal>
                    <RoomWrapper onClick={closeModal3}><EnterRoomByDate activity={activity} year={nowYear} month={nowMonth} date={nowDate+2} day={(nowDay+2)%7} time={'19:00'}></EnterRoomByDate></RoomWrapper>
                    <EnterRoomModal onClick={closeModal3} isModalOpen={isModal3Open} year={nowYear} month={nowMonth} date={nowDate+2} day={(nowDay+2)%7} activity={activity} time={'19:00'}></EnterRoomModal>
                    <RoomWrapper onClick={closeModal4}><EnterRoomByDate activity={activity} year={nowYear} month={nowMonth} date={nowDate+3} day={(nowDay+3)%7} time={'19:00'}></EnterRoomByDate></RoomWrapper>
                    <EnterRoomModal onClick={closeModal4} isModalOpen={isModal4Open} year={nowYear} month={nowMonth} date={nowDate+3} day={(nowDay+3)%7} activity={activity} time={'19:00'}></EnterRoomModal>
                    <RoomWrapper onClick={closeModal5}><EnterRoomByDate activity={activity} year={nowYear} month={nowMonth} date={nowDate+4} day={(nowDay+4)%7} time={'19:00'}></EnterRoomByDate></RoomWrapper>
                    <EnterRoomModal onClick={closeModal5} isModalOpen={isModal5Open} year={nowYear} month={nowMonth} date={nowDate+4} day={(nowDay+4)%7} activity={activity} time={'19:00'}></EnterRoomModal>
                    <RoomWrapper onClick={closeModal6}><EnterRoomByDate activity={activity} year={nowYear} month={nowMonth} date={nowDate+5} day={(nowDay+5)%7} time={'19:00'}></EnterRoomByDate></RoomWrapper>
                    <EnterRoomModal onClick={closeModal6} isModalOpen={isModal6Open} year={nowYear} month={nowMonth} date={nowDate+5} activity={activity} day={(nowDay+5)%7} time={'19:00'}></EnterRoomModal>
                </>
            );
        // })
    }

    return (
        <Wrapper>
            <RoomListByDateWrapper>
                <RoomByDateWrapper>
                    {getScheduleLines()}
                </RoomByDateWrapper>
            </RoomListByDateWrapper>
            <GotoRoomByDate></GotoRoomByDate>
        </Wrapper>
    );

    if(isLoading){
        return (<div>loading...</div>)
    }
    if(isError){
        return (<div>error!</div>)
    }
    if(data){
        console.log(data);
        return (
            <Wrapper>
                <RoomListByDateWrapper>
                    <RoomByDateWrapper>
                        {getScheduleLines()}
                    </RoomByDateWrapper>
                </RoomListByDateWrapper>
                <GotoRoomByDate></GotoRoomByDate>
                <NewRoom></NewRoom>
            </Wrapper>
        );
    }
    return(<div>예외!</div>)

  }

  const RoomWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    width:100%;
    height: 4.1rem;
    border-radius: 2.1rem;
    background-color: #f0f8f7;
    margin-bottom:3.5rem;

    overflow:visible;

`

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;

    width:100%;
    height: fit-content;
`

const RoomListByDateWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-bottom:3.4rem;

    width:100%;
    height: fit-content;
`
const RoomByDateWrapper = styled.div`
    display:flex;
    flex-direction:column;

    width:84.6%;
    height: fit-content;
`
export default RoomListByDate