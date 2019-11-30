import React from 'react';
import styled from 'styled-components';

import IdInput from "../molecules/inputs/IdInput";
import PwInput from "../molecules/inputs/PwInput";
import Login from '../molecules/buttons/Login';
import Signin from '../molecules/buttons/Signin';


const loginForm = () => {
    return (
                <Wrapper>
                    <IdInput></IdInput>
                    <PwInput></PwInput>
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
    align-items:center;
    width:100%;
    height:fit-content;
    margin-bottom:6.96rem;
`

const GetInWrapper = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;

    width:78.6%;
    height: fit-content;

`


export default loginForm