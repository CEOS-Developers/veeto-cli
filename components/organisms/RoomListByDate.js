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

    // const [{data, isLoading, isError}, doFetch] = useDataApi(process.env.API_HOST + '/api/roomList/2019/11/24/');
    const [{data, isLoading, isError}, doFetch] = useDataApi('https://d2gv8trg60k042.cloudfront.net/api/roomList/2019/11/24/');

    const router = useRouter();
    const { date } = router.query;
    if(date){
        var year = date.slice(0,4);
        var month = date.slice(5,7);
        var ddate = date.slice(8,10);
    }
    const day = 2;


    const getScheduleLines = () => {
        // return data.map((value, index) => {
            return(
                <>  
                    <RoomWrapper onClick={closeModal1}><EnterRoomByDate activity={1} year={year} month={month} date={ddate} day={day} time={'14:00'}></EnterRoomByDate></RoomWrapper>
                    <EnterRoomModal onClick={closeModal1} isModalOpen={isModal1Open} year={year} month={month} date={ddate} day={day} activity={1} time={'14:00'}></EnterRoomModal>
                    <RoomWrapper onClick={closeModal2}><EnterRoomByDate activity={2} year={year} month={month} date={ddate} day={day} time={'14:00'}></EnterRoomByDate></RoomWrapper>
                    <EnterRoomModal onClick={closeModal2} isModalOpen={isModal2Open} year={year} month={month} date={ddate} day={day} activity={2} time={'14:00'}></EnterRoomModal>
                    <RoomWrapper onClick={closeModal3}><EnterRoomByDate activity={3} year={year} month={month} date={ddate} day={day} time={'14:00'}></EnterRoomByDate></RoomWrapper>
                    <EnterRoomModal onClick={closeModal3} isModalOpen={isModal3Open} year={year} month={month} date={ddate} day={day} activity={3} time={'14:00'}></EnterRoomModal>
                    <RoomWrapper onClick={closeModal4}><EnterRoomByDate activity={1} year={year} month={month} date={ddate} day={day} time={'19:00'}></EnterRoomByDate></RoomWrapper>
                    <EnterRoomModal onClick={closeModal4} isModalOpen={isModal4Open} year={year} month={month} date={ddate} day={day} activity={1} time={'19:00'}></EnterRoomModal>
                    <RoomWrapper onClick={closeModal5}><EnterRoomByDate activity={2} year={year} month={month} date={ddate} day={day} time={'19:00'}></EnterRoomByDate></RoomWrapper>
                    <EnterRoomModal onClick={closeModal5} isModalOpen={isModal5Open} year={year} month={month} date={ddate} day={day} activity={2} time={'19:00'}></EnterRoomModal>
                    <RoomWrapper onClick={closeModal6}><EnterRoomByDate activity={3} year={year} month={month} date={ddate} day={day} time={'19:00'}></EnterRoomByDate></RoomWrapper>
                    <EnterRoomModal onClick={closeModal6} isModalOpen={isModal6Open} year={year} month={month} date={ddate} day={day} activity={3} time={'19:00'}></EnterRoomModal>
                    {/* <div onClick={() => setModalOpen(!isModalOpen)}>
                        <EnterRoomByDate activity={value.activity} time={value.time.slice(0,5)} room_name={value.room_name} place={value.place}></EnterRoomByDate>
                    </div>
                    <EnterRoomModal isModalOpen={isModalOpen} month={value.month} day={value.day} activity={value.activity} time={value.time.slice(0,5)} room_name={value.room_name} place={value.place}></EnterRoomModal> */}
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