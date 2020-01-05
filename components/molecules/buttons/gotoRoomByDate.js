import React, { useState, Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import GotoRoomByDate from '../../atoms/buttons/texts/gotoRoomsByDate';

const gotoRoomByDate = () => {

    const now = new Date();
    const nowDay = now.getDay();

    //신청 가능한 날짜 중 첫 번째 날짜
    let allowedFirstDate;
    //현재 요일이 일, 월, 화, 수 중 하나이면 그 주 토요일 액티비티부터 신청 가능
    if(nowDay===0||nowDay===1||nowDay===2||nowDay===3){
        allowedFirstDate = new Date(now.valueOf()+1000*3600*24*(6-nowDay))
    }
    //현재 요일이 목이면 그 주 일요일 액티비티부터 신청 가능
    else if(nowDay===4){
        allowedFirstDate = new Date(now.valueOf()+1000*3600*24*(6-nowDay+1))
    }
    //현재 요일이 금, 토이면 그 다음 주 토요일 액티비티부터 신청 가능
    else if(nowDay===5||nowDay===6){
        allowedFirstDate = new Date(now.valueOf()+1000*3600*24*(6-nowDay+7))
    }

    //신청 가능한 날짜 중 첫 번째 날짜 객체에서 년, 월, 일 분리
    const year = allowedFirstDate.getFullYear();
    const month = allowedFirstDate.getMonth()+1;
    const date = allowedFirstDate.getDate();

    //월, 일이 한자리일 때 앞에 0 붙이기
    var refinedMonth, refinedDate;
    if(month.toString().length===1){
        refinedMonth = 0+month.toString();
    }
    else{
        refinedMonth = month.toString();
    }
    if(date.toString().length===1){
        refinedDate = 0+date.toString();
    }
    else{
        refinedDate = date.toString();
    }

    //query string 만들기
    const queryDate=`${year}-${refinedMonth}-${refinedDate}`;
    console.log(queryDate);
    return(
        <Link href={{ pathname: 'roomsByDate', query: { date: `${queryDate}` }}}>
            <a style={{textDecoration:'none'}}>
            <GotoRoomByDate></GotoRoomByDate>
        </a></Link>
    );
}

export default gotoRoomByDate;