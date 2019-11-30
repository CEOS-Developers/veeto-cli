import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import Text from '../atoms/Text';

import ParticipantInfo from '../molecules/ParticipantInfo'

const ParticipantsInfo = () => {
    return (
        <Wrapper>
            <RowWrapper style={{marginBottom:'4.49rem'}}>
                <ParticipantInfo></ParticipantInfo>
                <ParticipantInfo></ParticipantInfo>
            </RowWrapper>
            <RowWrapper>
                <ParticipantInfo></ParticipantInfo>
                <ParticipantInfo></ParticipantInfo>
            </RowWrapper>
        </Wrapper>
    );
  }

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;

    width:100%;
    height:fit-content;

    margin-bottom:7.9rem;
    
`
const RowWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;

    width:85.6%;
    height:fit-content;
`

export default ParticipantsInfo