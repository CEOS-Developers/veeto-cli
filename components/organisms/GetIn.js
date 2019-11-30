import React, { useState, Component } from 'react';
import styled from 'styled-components';

import Login from '../molecules/buttons/GotoLogin';
import Signin from '../molecules/buttons/Signin';


const GetIn = (props) => {
    return (
                <Wrapper>
                    <GetInWrapper>
                        <Login></Login>
                        <Signin></Signin>
                    </GetInWrapper>

                </Wrapper>
    );
  }

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    width:100%;
    height: fit-content;

    margin-bottom:5.1rem;
`

const GetInWrapper = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;

    width:78.6%;
    height: fit-content;

`

export default GetIn