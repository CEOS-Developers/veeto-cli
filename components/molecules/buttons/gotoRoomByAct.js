import React, { useState, Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import GotoRoomByAct from '../../atoms/buttons/texts/gotoRoomsByAct';
import Preview from '../../atoms/buttons/texts/preview';

const gotoRoomByAct = () => {
    return(
        <Link href='/roomsByAct'><a style={{textDecoration:'none'}}>
            <GotoRoomByAct></GotoRoomByAct>
        </a></Link>
    );
}

export default gotoRoomByAct;