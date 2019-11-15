import React from 'react'
import Link from 'next/link';
import styled from 'styled-components';

import Day from '../../atoms/buttons/texts/day'

const now = new Date();
const nowDate = now.getDate();

const Component = (props) => {
    if(props.value < nowDate || props.value >= nowDate+14) return(
        <Day sunday={props.sunday} value={props.value}></Day>
    );
    else{
        return(
            <Link href='/roomsByDate'>
            <a style={{textDecoration:'none'}}>
                <Day sunday={props.sunday} value={props.value}></Day>
            </a>
            </Link>
        );
    }

  }

export default Component