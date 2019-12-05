import React, { useState, Component } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router'
import Link from 'next/link'

import {useDataApi} from '../../lib/hooks'
import EnterRoomModal from '../templates/EnterRoomModal';
import EnterRoomByDate from '../organisms/EnterRoomByDate';
import GotoRoomByAct from '../molecules/buttons/gotoRoomByAct';
import NewRoom from '../molecules/buttons/newRoom';

const RoomListByDate = (props) => {
    const [isModal1Open, setModal1Open] = useState(false); const closeModal1 = () => { setModal1Open(!isModal1Open); }
    const [isModal2Open, setModal2Open] = useState(false); const closeModal2 = () => { setModal2Open(!isModal2Open); }
    const [isModal3Open, setModal3Open] = useState(false); const closeModal3 = () => { setModal3Open(!isModal3Open); }
    const [isModal4Open, setModal4Open] = useState(false); const closeModal4 = () => { setModal4Open(!isModal4Open); }
    const [isModal5Open, setModal5Open] = useState(false); const closeModal5 = () => { setModal5Open(!isModal5Open); }
    const [isModal6Open, setModal6Open] = useState(false); const closeModal6 = () => { setModal6Open(!isModal6Open); }

    const router = useRouter();
    const { date } = router.query;
    const [fullDate, setFullDate] = useState(date);

    const updateFullDate = (n) => {
        setFullDate(n);
    }

    const getScheduleLines = () => {
        // return data.map((value, index) => {
            return(
                <>  
                    <RoomWrapper onClick={closeModal1}><EnterRoomByDate fullDate={fullDate} updateFullDate={updateFullDate} activity={1} time={'14:00'}></EnterRoomByDate></RoomWrapper>
                    <EnterRoomModal onClick={closeModal1} isModalOpen={isModal1Open} fullDate={fullDate} updateFullDate={updateFullDate} activity={1} time={'14:00'}></EnterRoomModal>
                    <RoomWrapper onClick={closeModal2}><EnterRoomByDate fullDate={fullDate} updateFullDate={updateFullDate} activity={2} time={'14:00'}></EnterRoomByDate></RoomWrapper>
                    <EnterRoomModal onClick={closeModal2} isModalOpen={isModal2Open} fullDate={fullDate} updateFullDate={updateFullDate} activity={2} time={'14:00'}></EnterRoomModal>
                    <RoomWrapper onClick={closeModal3}><EnterRoomByDate fullDate={fullDate} updateFullDate={updateFullDate} activity={3} time={'14:00'}></EnterRoomByDate></RoomWrapper>
                    <EnterRoomModal onClick={closeModal3} isModalOpen={isModal3Open} fullDate={fullDate} updateFullDate={updateFullDate} activity={3} time={'14:00'}></EnterRoomModal>
                    <RoomWrapper onClick={closeModal4}><EnterRoomByDate fullDate={fullDate} updateFullDate={updateFullDate} activity={1} time={'19:00'}></EnterRoomByDate></RoomWrapper>
                    <EnterRoomModal onClick={closeModal4} isModalOpen={isModal4Open} fullDate={fullDate} updateFullDate={updateFullDate} activity={1} time={'19:00'}></EnterRoomModal>
                    <RoomWrapper onClick={closeModal5}><EnterRoomByDate fullDate={fullDate} updateFullDate={updateFullDate} activity={2} time={'19:00'}></EnterRoomByDate></RoomWrapper>
                    <EnterRoomModal onClick={closeModal5} isModalOpen={isModal5Open} fullDate={fullDate} updateFullDate={updateFullDate} activity={2} time={'19:00'}></EnterRoomModal>
                    <RoomWrapper onClick={closeModal6}><EnterRoomByDate fullDate={fullDate} updateFullDate={updateFullDate} activity={3} time={'19:00'}></EnterRoomByDate></RoomWrapper>
                    <EnterRoomModal onClick={closeModal6} isModalOpen={isModal6Open} fullDate={fullDate} updateFullDate={updateFullDate} activity={3} time={'19:00'}></EnterRoomModal>
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
            <GotoRoomByAct></GotoRoomByAct>
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
                <GotoRoomByAct></GotoRoomByAct>
                <NewRoom></NewRoom>
            </Wrapper>
        );
    }
    return(<div>예외!</div>)
  }

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

    width:85.9%;
    height: fit-content;
`

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

export default RoomListByDate