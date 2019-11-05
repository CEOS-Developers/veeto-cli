import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import Text from '../atoms/Text';

const InRoomFooterWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    width:100%;
    height:4rem;
    overflow:auto;
`


const InRoomInfo = () => {
    return (
        <InRoomFooterWrapper>
        <Link href='/'>
            <a>
                <Text width={4} height={1.375} size={0.9375} weight={900} align={'center'} color={'#afafaf'} lineheight={2.4}>
                    방 나가기</Text>
            </a>
        </Link>
        </InRoomFooterWrapper>
    );
  }
  
export default InRoomInfo