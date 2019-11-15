import React, { useState, Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import GotoRoomByDate from '../../atoms/buttons/texts/gotoRoomsByDate';

const gotoRoomByDate = () => {
    return(
        <Link href='/roomsByDate'><a style={{textDecoration:'none'}}>
            <GotoRoomByDate></GotoRoomByDate>
        </a></Link>
    );
}

export default gotoRoomByDate;