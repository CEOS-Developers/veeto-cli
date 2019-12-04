import React, { Component } from 'react';
import styled from 'styled-components';

const ParticipantInfo = (props) => {
    const {member} = props;

    return (
        <Wrapper me={props.me}>
            <RowWrapper style={{marginBottom:'5.5rem'}}>
                <NameAge me={props.me}>{member.user_nickname}, {member.age}</NameAge>
                <Gender>{member.gender}</Gender>
                        </RowWrapper>
                        <RowWrapper>
                            <Blank></Blank>
                <Univ me={props.me}>{member.university}</Univ>
            </RowWrapper>
        </Wrapper>
    );
  }

const Wrapper = styled.div`
    width: 48.364%;
    height: 14.51rem;
    border-radius: 1rem;
    border: solid 0.2rem #61b28f;

    background-color: ${props => props.me ? '#61b28f': '#ffffff'};
    padding-top:0.8rem; padding-bottom:0.8rem;
    padding-left:1rem; padding-right:1rem;
    
`

const RowWrapper = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`

const NameAge = styled.span`
    width: fit-content;
    height: fit-content;
    font-family: NotoSansCJKkr;
    font-size: 1.5rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.4;
    letter-spacing: normal;
    text-align: center;
    color: ${props => props.me ? '#ffffff' : '#2e9267'};
`
const Gender = styled.span`
    width: fit-content;
    height: fit-content;
    font-family: NotoSansCJKkr;
    font-size: 1.5rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.4;
    letter-spacing: normal;
    text-align: center;
    color: #2e9267;
`

const Blank = styled.span`
    width:1rem;
    height:1rem;
`

const Univ = styled.div`
    width: fit-content;
    height: fit-content;
    font-family: NotoSansCJKkr;
    font-size: 1.2rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 3;
    letter-spacing: normal;
    text-align: center;
    color: ${props => props.me ? '#ffffff' : '#2e9267'};
`
export default ParticipantInfo