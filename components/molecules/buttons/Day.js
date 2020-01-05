import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'
import styled from 'styled-components';

import Day from '../../atoms/buttons/texts/day'

const now = new Date();
const nowDate = now.getDate();
const nowMonth = now.getMonth()+1;



let divisor = 30;
if(nowMonth===1 || nowMonth===3 || nowMonth===5 || nowMonth===7 || nowMonth===8 || nowMonth===10 || nowMonth===12){
    divisor=31;
}
else if(nowMonth===2){
    divisor=28;
}

const Component = (props) => {
//테스트
const fullDate = props.fullDate;
const testYear = fullDate.getFullYear();
const testMonth = fullDate.getMonth()+1;
const testDate = fullDate.getDate();
const testDay = fullDate.getDay();

//테스트
    const router = useRouter();
    const { date } = router.query;
    if(date){
        var day = date.slice(8,10);
    }
    if(day==testDate){
        var select = true;
    }
    else{
        var select = false;
    }

    //월, 일 한 자리일 때 앞에 0 붙이기
    if(testMonth.toString().length===1){
        var refinedMonth = 0+testMonth.toString();
    }
    else{
        var refinedMonth = testMonth.toString();
    }

    if(testDate.toString().length===1){
        var refinedDay = 0+testDate.toString();
    }
    else{
        var refinedDay = testDate.toString();
    }


    if(((testDate-1)%divisor+1 >= nowDate+3 || (testDate-1)%divisor+1 < (nowDate+14)%divisor)&&(testDay==0||testDay==6)) {
        return(
            <Link href={{ pathname: 'roomsByDate', query: { date: `${testYear}-${refinedMonth}-${refinedDay}` }}}>
            <a style={{textDecoration:'none'}}>
                <Day selected={select} fullDate={props.fullDate} saturday={props.saturday} sunday={props.sunday} value={testDate}></Day>
            </a>
            </Link>
        );
    }
    else{
        return(
            <Day fullDate={props.fullDate} saturday={props.saturday} sunday={props.sunday} value={testDate}></Day>
        );
    }

  }

export default Component