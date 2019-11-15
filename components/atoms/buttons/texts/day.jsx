import React from 'react';
import styled from 'styled-components';

const now = new Date();
const nowDate = now.getDate();

const DayButton = (props) => {
    let dateColor = '#2e9267';
    let today = false;
    if(props.value === nowDate) {
        dateColor = '#3f6459';
        today = true;
    }
    else if(props.value < nowDate || props.value >= nowDate+14) dateColor = '#afafaf';
    else if(props.sunday) dateColor = '#b46b16';

    return (
                <Wrapper>
                    <Day color={dateColor}>{props.value}</Day>
                    <Label today={today}>오늘</Label>
                </Wrapper>
    );
  }

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:fit-content;
    height:fit-content;
    margin-bottom:0.7rem;
`

const Day = styled.div`
    width: 2.6rem;
    height: 2.9rem;
    font-family: NotoSansCJKkr;
    font-size: 1.8rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: normal;
    text-align: center;
    color: ${props => props.color};
`

const Label = styled.div`
    visibility: ${props => props.today ? 'visible' : 'hidden'};
    width: fit-content;
    height: 1.5rem;
    font-family: NotoSansCJKkr;
    font-size: 1rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.6;
    letter-spacing: normal;
    text-align: center;
    color: #3f6459;
`

export default DayButton