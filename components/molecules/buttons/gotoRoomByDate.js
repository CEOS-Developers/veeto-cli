import React, { useState, Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import GotoRoomByDate from '../../atoms/buttons/texts/gotoRoomsByDate';

const gotoRoomByDate = () => {

    const now = new Date();
    const nowYear = now.getFullYear();
    const nowMonth = now.getMonth()+1;
    const nowDate = now.getDate();

    if(nowDate.toString().length===1){
        var refinedDate = 0+nowDate.toString();
    }
    else{
        var refinedDate = nowDate.toString();
    }

    const date=`${nowYear}-${nowMonth}-${refinedDate}`;

    return(
        <Link href={{ pathname: 'roomsByDate', query: { date: `${date}` }}}>
            <a style={{textDecoration:'none'}}>
            <GotoRoomByDate></GotoRoomByDate>
        </a></Link>
    );
}

export default gotoRoomByDate;