import React from 'react';
import styled from 'styled-components';

const Preview = (props) => {

    return (
                <Wrapper>
                    <Text>회원가입하기</Text>
                </Wrapper>
    );
  }

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width: 13.5rem;
    height: 3.8rem;
    border-radius: 2rem;
    background-color: #61b28f;
`
const Text = styled.div`
    width: fit-content;
    height: fit-content;
    font-family: NotoSansCJKkr;
    font-size: 1.6rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.38;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
`

export default Preview