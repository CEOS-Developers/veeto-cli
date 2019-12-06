import React from 'react';
import styled from 'styled-components';

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

const DayButton = (props) => {
    let dateColor = '#d9d9d9';
    let today = false;
    // if(props.value === nowDate) {
    //     dateColor = '#3f6459';
    //     today = true;
    // }
    // else if(props.sunday) dateColor = '#b46b16';
    // else if((props.value-1)%divisor+1 >= nowDate || (props.value-1)%divisor+1 < (nowDate+14)%divisor) dateColor ='#2e9267';

    if(props.value === 21 || props.value === 22) {
        dateColor = '#2e9267';
    }
    if(props.value===nowDate) today = true;

    return (
                <Wrapper>
                    <DayBackground selected={props.selected}>
                        <Day color={dateColor}>{props.value}</Day>
                    </DayBackground>
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
    height: 2.6rem;
    font-family: NotoSansCJKkr;
    font-size: 1.8rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: center;
    color: ${props => props.color};
`

const DayBackground = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:fit-content;
    height:fit-content;
    padding:0.2rem;
    border-radius:2rem;
    background-color: ${props => props.selected ? '#d0eae1' : ''};
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