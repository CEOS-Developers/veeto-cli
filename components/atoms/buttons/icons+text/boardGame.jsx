import React, { Component } from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';

const MainExplanation = (props) => {
    return (
                        <BoardGameWrapper>
                            <BoardGame src={'/boardGame.png'}/>
                            <BoardGameLabel>보드게임</BoardGameLabel>
                        </BoardGameWrapper>
    );
  }


const BoardGameWrapper = styled.div`
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

const BoardGame = styled.img`
    width:7.0rem;
    height:7.1rem;
`

const BoardGameLabel = styled.div`
    margin-left:0.8rem;
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