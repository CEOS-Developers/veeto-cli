import React, { Component, useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import Text from '../atoms/Text';
import { useRouter } from 'next/router'

import ParticipantInfo from '../molecules/ParticipantInfo'

const ParticipantsInfo = (props) => {
    let {members} = props;

    const router = useRouter();
    const { user } = router.query;
    const [alignedMembers, setAlignedMembers] = useState(null);
    useEffect(() => {
        const me = members[user-1];
        members.splice(user-1,1);

       setAlignedMembers([me, ...members]);
    },[])

    if(alignedMembers) {
    return (
        <Wrapper>
            <RowWrapper style={{marginBottom:'4.49rem'}}>
                <ParticipantInfo me={true} member={alignedMembers[0]}></ParticipantInfo>
                <ParticipantInfo member={alignedMembers[1]}></ParticipantInfo>
            </RowWrapper>
            <RowWrapper>
                <ParticipantInfo member={alignedMembers[2]}></ParticipantInfo>
                <ParticipantInfo member={alignedMembers[3]}></ParticipantInfo>
            </RowWrapper>
        </Wrapper>
    );
    }
    return <div/>
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