import React, { useState, Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link'

import EnterRoomByDate from '../organisms/EnterRoomByDate';
import GotoRoomByAct from '../molecules/buttons/gotoRoomByAct';
import NewRoom from '../molecules/buttons/newRoom';

const RoomListByDate = (props) => {
    const [isOpen, setOpen] = useState(true);
    return (
        <Wrapper>
            <RoomListByDateWrapper>
                <RoomByDateWrapper>
                    <EnterRoomByDate onClick={() => setOpen(!isOpen)} act={1} time={'14:00'} roomTitle={'볼링마스터 들와라 들와'} place={'스카이락 볼링장'}></EnterRoomByDate>
                    <EnterRoomByDate act={2} time={'15:00'} roomTitle={'보더게임'} place={'놀숲 홍대점'}></EnterRoomByDate>
                    <EnterRoomByDate act={3} time={'17:00'} roomTitle={'빠르게 공강 방탈출'} place={'이스케이프 홍대'}></EnterRoomByDate>
                    <EnterRoomByDate act={3} time={'17:30'} roomTitle={'방탈출 초보 같이해요'} place={'컴즈 방탈출'}></EnterRoomByDate>
                </RoomByDateWrapper>
            </RoomListByDateWrapper>
            <GotoRoomByAct></GotoRoomByAct>
            <NewRoom></NewRoom>
        </Wrapper>
    );
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

    width:84.6%;
    height: fit-content;
`
export default RoomListByDate