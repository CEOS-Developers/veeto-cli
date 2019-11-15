import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import Text from '../atoms/Text';
import Image from '../atoms/icons/image';
import Bowling from "../atoms/buttons/icons/bowling";
import Place from "../atoms/buttons/icons/place";

const InRoomInfoWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    margin-bottom:1.24375rem;
    width:100%;
    height:fit-content;
    overflow:auto;
`


const InRoomInfo = () => {
    return (
        <InRoomInfoWrapper>
            <Bowling></Bowling>
            <Text size={1.0625} weight={500} align={'center'} color={'#2e9267'} lineheight={1.47}>
                볼링 마스터들</Text>
            <Text style={{marginBottom:'0.5rem'}}size={1.0625} weight={900} align={'center'} color={'#2e9267'} lineheight={1.47}>
                11/1 금  11:30</Text>
            <div style={{display:'flex',flexDirection:'row',alignItems:'center',height:'fit-content', marginBottom:'1.24375rem'}}>
            <Place style={{marginRight:'0.2625rem'}}></Place>
            <Text size={0.75} weight={'normal'} align={'center'} color={'#2e9267'} lineheight={1.47} top={0.5}>
               홍대태화볼링장</Text>
            </div>

        </InRoomInfoWrapper>
    );
  }
  
export default InRoomInfo