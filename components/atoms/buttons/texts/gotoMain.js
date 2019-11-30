import React from 'react';
import styled from 'styled-components';

const GotoMain = (props) => {

    return (
                <Wrapper>
                    <Text>홈으로</Text>
                </Wrapper>
    );
  }

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width: 33rem;
    height: 3.8rem;
    border-radius: 2rem;
    background-color: #61b28f;
    margin-bottom:6.1rem;
`
const Text = styled.div`
    font-family: NotoSansCJKkr;
    font-size: 1.4rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
`

export default GotoMain