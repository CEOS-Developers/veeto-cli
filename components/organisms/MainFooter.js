import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import Text from '../atoms/Text';

const MainFooterWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    width:100%;
    overflow:auto;
`


const MainFooter = () => {
    return (
        <MainFooterWrapper>
            <Link href="/inroom"><a>
                <Text size={0.75} width={14.625} height='1rem' weight={300} align={'center'} color={'#ffffff'} bordr={1.75} bcolor={'#61b28f'} lineheight={4}>
                   방 만들기
                </Text>
                </a></Link>
        </MainFooterWrapper>
    );
  }
  
export default MainFooter