import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import { useRouter } from 'next/router'

import Bowling from '../../atoms/buttons/icons+text/bowling'
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';

const bowling = (props) => {
        return (
            <Link href={{ pathname: 'roomsByAct', query: { activity: '1' }}}>
                <a style={{textDecoration:'none'}}>
                    <Bowling></Bowling>
                </a>
            </Link>
    );
  }
  
export default bowling