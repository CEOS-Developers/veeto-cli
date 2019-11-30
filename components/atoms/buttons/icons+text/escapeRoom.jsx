import React, { Component } from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';

const MainExplanation = (props) => {
    return (

                        <EscapeRoomWrapper>
                            <EscapeRoom src={'/escapeRoom.png'}/>
                            <EscapeRoomLabel>방탈출</EscapeRoomLabel>
                        </EscapeRoomWrapper>
    );
  }

const EscapeRoomWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    width:7.1rem;
    height:9.5rem;

    margin-top:0.8rem;
    margin-left:0.6rem;
    margin-right:0.6rem;
    margin-bottom:0.74rem;
`

const EscapeRoom = styled.img`
    width:7.1rem;
    height:7.1rem;
`

const EscapeRoomLabel = styled.div`
    margin-left:1.4rem;
    width: fit-content;
    height: 2rem;
    font-family: NotoSansCJKkr;
    font-size: 1.4rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    text-align: center;
    color: #2e9267;
`

export default MainExplanation