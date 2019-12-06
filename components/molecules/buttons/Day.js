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

    const router = useRouter();
    const { date } = router.query;
    if(date){
        var day = date.slice(8,10);
    }
    if(day==props.value){
        var select = true;
    }
    else{
        var select = false;
    }

    
    if(props.value.toString().length===1){
        var refinedDay = 0+props.value.toString();
    }
    else{
        var refinedDay = props.value.toString();
    }

    if(props.value===21 || props.value===22) {
        return(
            <Link href={{ pathname: 'roomsByDate', query: { date: `${props.year}-${props.month}-${refinedDay}` }}}>
            <a style={{textDecoration:'none'}}>
                <Day selected={select} sunday={props.sunday} value={props.value}></Day>
            </a>
            </Link>
        );
    }
    else{
        return(
            <Day sunday={props.sunday} value={props.value}></Day>
        );
    }


    // if((props.value-1)%divisor+1 >= nowDate || (props.value-1)%divisor+1 < (nowDate+14)%divisor) {
    //     return(
    //         <Link href={{ pathname: 'roomsByDate', query: { date: `${props.year}-${props.month}-${refinedDay}` }}}>
    //         <a style={{textDecoration:'none'}}>
    //             <Day selected={select} sunday={props.sunday} value={props.value}></Day>
    //         </a>
    //         </Link>
    //     );
    // }
    // else{
    //     return(
    //         <Day sunday={props.sunday} value={props.value}></Day>
    //     );
    // }

  }

export default Component