import React, { useState, Component } from 'react';
import styled from 'styled-components';

import SimpleInfo from '../molecules/buttons/SimpleInfo';
import Specific from '../organisms/specific.js'

const RoomListByDate = (props) => {
    const [isOpen, setOpen] = useState(true);
    return (
        <Wrapper>
                    <SimpleInfo onClick={() => setOpen(!isOpen)} act={props.act} time={props.time} roomTitle={props.roomTitle} place={props.place}></SimpleInfo>
                    {isOpen && (
                        <Specific></Specific>
                    )}
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

export default RoomListByDate