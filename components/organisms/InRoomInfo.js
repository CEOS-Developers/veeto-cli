import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import Text from '../atoms/Text';
import Image from '../atoms/icons/image';

const InRoomInfoWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    width:24.0625rem;
    height:11.25rem;
    overflow:auto;
`


const InRoomInfo = () => {
    return (
        <InRoomInfoWrapper>
            <Image src={'/bowling.png'} width={5.825} height={6.5625}/>
            <Text size={1.0625} weight={500} align={'center'} color={'#2e9267'} lineheight={1.47}>
                볼링 마스터들</Text>
            <Text size={1.0625} weight={900} align={'center'} color={'#2e9267'} lineheight={1.47}>
                11/1 금  11:30</Text>
            <Text size={0.75} weight={'normal'} align={'center'} color={'#2e9267'} lineheight={1.47} top={0.5}>
                홍대태화볼링장</Text>
        </InRoomInfoWrapper>
    );
  }
  
export default InRoomInfo