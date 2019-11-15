import React, { Component } from 'react';
import styled from 'styled-components';

import BoardGameIcon from "../icons/boardGame";

const BoardGame = () => {
    return (
                <Wrapper>
                    <BoardGameIcon style={{width:'6.4rem',height:'6.4rem'}}></BoardGameIcon>
                    <Label>보드게임</Label>
                </Wrapper>
    );
  }
  
const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    width:fit-content;
    height:fit-content;
`
const Label = styled.div`
    width: 2.6rem;
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

export default BoardGame