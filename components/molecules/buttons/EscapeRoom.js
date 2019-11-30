import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link'

import EscapeRoom from '../../atoms/buttons/icons+text/escapeRoom'

const boardGame = (props) => {
    return (
        <Link href={{ pathname: 'roomsByAct', query: { activity: '3' }}}>
        <a style={{textDecoration:'none'}}>
                    <EscapeRoom></EscapeRoom>
                </a>
            </Link>
    );
  }
  
export default boardGame