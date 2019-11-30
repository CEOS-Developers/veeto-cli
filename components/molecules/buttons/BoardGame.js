import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link'

import BoardGame from '../../atoms/buttons/icons+text/boardGame'

const boardGame = (props) => {
    return (
        <Link href={{ pathname: 'roomsByAct', query: { activity: '2' }}}>
        <a style={{textDecoration:'none'}}>
                    <BoardGame></BoardGame>
                </a>
            </Link>
    );
  }
  
export default boardGame