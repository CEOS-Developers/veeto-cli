import React from 'react';
import Logo from "../icons/logo";
import styled from 'styled-components';


const loginTitle = () => {
    return (
                <Wrapper>
                    <Logo style={{width:'30%', height:'3.3rem', marginRight:'2.2%'}}></Logo>
                    <Text>시작하기</Text>
                </Wrapper>
    );
  }
  
const Wrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    width:fit-content;
    height:fit-content;
    margin-bottom:0.9rem;

`
const Text = styled.span`
    width: fit-content;
    height: 3.4rem;
    font-family: NotoSansCJKkr;
    font-size: 2.3rem;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: 0.115rem;
    text-align: center;
    color: #2e9267;
`

export default loginTitle