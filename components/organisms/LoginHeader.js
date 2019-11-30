import React from 'react';
import LoginTitle from "../atoms/icon+text/loginTitle";
import BackToTutorial from "../molecules/buttons/BackToTutorial";
import styled from 'styled-components';


const loginTitle = () => {
    return (
                <Wrapper>
                    <LoginTitle></LoginTitle>
                    <BackToTutorial></BackToTutorial>
                </Wrapper>
    );
  }
  
const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:fit-content;
    height:fit-content;
    margin-top:6.6rem;
    margin-bottom:5.37rem;

`


export default loginTitle