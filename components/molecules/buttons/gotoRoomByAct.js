import React, { useState, Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import GotoRoomByAct from '../../atoms/buttons/texts/gotoRoomsByAct';

const gotoRoomByAct = () => {
    return(
        <Link href={{ pathname: 'roomsByAct', query: { activity: 1 }}}>
            <a style={{textDecoration:'none'}}>
            <GotoRoomByAct></GotoRoomByAct>
        </a></Link>
    );
}

export default gotoRoomByAct;