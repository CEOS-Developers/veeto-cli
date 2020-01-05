import React, { useState, Component } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router'

import {useDataApi} from '../../lib/hooks' //hook 나중에 쓰면 참고
import EnterRoomModal from '../templates/EnterRoomModal';
import EnterRoomByDate from '../organisms/EnterRoomByDate';
import GotoRoomByDate from '../molecules/buttons/gotoRoomByDate';

const RoomListByDate = (props) => {
    const [isModal1Open, setModal1Open] = useState(false); const closeModal1 = () => { setModal1Open(!isModal1Open); }
    const [isModal2Open, setModal2Open] = useState(false); const closeModal2 = () => { setModal2Open(!isModal2Open); }
    const [isModal3Open, setModal3Open] = useState(false); const closeModal3 = () => { setModal3Open(!isModal3Open); }
    const [isModal4Open, setModal4Open] = useState(false); const closeModal4 = () => { setModal4Open(!isModal4Open); }
    
    const router = useRouter();
    const { activity } = router.query;

    const now = new Date();
    const nowDay = now.getDay();

    const getScheduleLines = () => {
            return(
                <>
                {(nowDay!=4 && nowDay!=5 && nowDay!=6) && <>
                    <RoomWrapper onClick={closeModal1}><EnterRoomByDate activity={activity} fullDate={new Date(now.valueOf()+1000*3600*24*(6-nowDay))} time={'17:00'}></EnterRoomByDate></RoomWrapper>
                    <EnterRoomModal onClick={closeModal1} isModalOpen={isModal1Open} fullDate={new Date(now.valueOf()+1000*3600*24*(6-nowDay))} activity={activity} time={'17:00'}></EnterRoomModal> </>}
                {(nowDay!=5 && nowDay!=6) && <>
                    <RoomWrapper onClick={closeModal2}><EnterRoomByDate activity={activity} fullDate={new Date(now.valueOf()+1000*3600*24*(6-nowDay+1))} time={'17:00'}></EnterRoomByDate></RoomWrapper>
                    <EnterRoomModal onClick={closeModal2} isModalOpen={isModal2Open} fullDate={new Date(now.valueOf()+1000*3600*24*(6-nowDay+1))} activity={activity} time={'17:00'}></EnterRoomModal> </>}
                    <RoomWrapper onClick={closeModal3}><EnterRoomByDate activity={activity} fullDate={new Date(now.valueOf()+1000*3600*24*(6-nowDay+7))} time={'17:00'}></EnterRoomByDate></RoomWrapper>
                    <EnterRoomModal onClick={closeModal3} isModalOpen={isModal3Open} fullDate={new Date(now.valueOf()+1000*3600*24*(6-nowDay+7))} activity={activity} time={'17:00'}></EnterRoomModal>
                    <RoomWrapper onClick={closeModal4}><EnterRoomByDate activity={activity} fullDate={new Date(now.valueOf()+1000*3600*24*(6-nowDay+7+1))} time={'17:00'}></EnterRoomByDate></RoomWrapper>
                    <EnterRoomModal onClick={closeModal4} isModalOpen={isModal4Open} fullDate={new Date(now.valueOf()+1000*3600*24*(6-nowDay+7+1))} activity={activity} time={'17:00'}></EnterRoomModal>
                </>
            );
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

    // if(isLoading){
    //     return (<div>loading...</div>)
    // }
    // if(isError){
    //     return (<div>error!</div>)
    // }
    // if(data){
    //     console.log(data);
    //     return (
    //         <Wrapper>
    //             <RoomListByDateWrapper>
    //                 <RoomByDateWrapper>
    //                     {getScheduleLines()}
    //                 </RoomByDateWrapper>
    //             </RoomListByDateWrapper>
    //             <GotoRoomByDate></GotoRoomByDate>
    //             <NewRoom></NewRoom>
    //         </Wrapper>
    //     );
    // }
    // return(<div>예외!</div>)

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

    width:85.9%;
    height: fit-content;
`
export default RoomListByDate