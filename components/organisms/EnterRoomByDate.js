import React, { useState, Component } from 'react';
import styled from 'styled-components';

import SimpleInfo from '../molecules/buttons/SimpleInfo';
import EnterRoomModal from '../templates/EnterRoomModal';

const RoomListByDate = (props) => {
    return (
                    <SimpleInfo year={props.year} month={props.month} date={props.date} day={props.day} activity={props.activity} time={props.time}></SimpleInfo>
    );
  }

const Wrapper = styled.div`
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