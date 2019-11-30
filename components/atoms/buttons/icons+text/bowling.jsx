import React, { Component } from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';

const bowling = (props) => {
    return (
                        <BowlingWrapper>
                            <Bowling src={'/bowling.png'}/>
                            <BowlingLabel>볼링</BowlingLabel>
                        </BowlingWrapper>
    );
  }


const BowlingWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    width:7.1rem;
    height:9.5rem;

    margin-top:0.8rem;
    margin-left:0.7rem;
    margin-right:0.4rem;
    margin-bottom:0.74rem;
    
`

const Bowling = styled.img`
    width:7.1rem;
    height:7.1rem;
`

const BowlingLabel = styled.div`
    margin-left:2.2rem;
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

export default bowling