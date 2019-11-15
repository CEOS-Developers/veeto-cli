import React, { useState, Component } from 'react';
import styled from 'styled-components';

import Enter from '../molecules/buttons/Enter';
import Preview from '../molecules/buttons/Preview';


const Specific = (props) => {
    return (
                <Wrapper>
                    <SpecificWrapper>
                        <Gauge></Gauge>
                        <Ratio></Ratio>
                        <Preview></Preview>
                        <Enter></Enter>
                    </SpecificWrapper>
                </Wrapper>
    );
  }

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    width:91%;
    height: 6.4rem;

    border-radius: 0.7rem;
    background-color: #deefe7;
    margin-bottom:1.5rem;
`

const SpecificWrapper = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;

    width:83%%;
    height: fit-content;

`
const Gauge = styled.div`
    width: 2.75rem;
    height: 2.75rem;
    background-color: #2e9267;
    margin-right:1.19rem;
` 

const Ratio = styled.div`
    width: 2.75rem;
    height: 2.75rem;
    background-color: #2e9267;
    margin-right:1.62rem;
` 

export default Specific