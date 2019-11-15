import React from 'react';
import styled from 'styled-components';

const Enter = (props) => {

    return (
                <Wrapper>
                    <Text>참여하기</Text>
                </Wrapper>
    );
  }

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width: 8.3rem;
    height: 3.4rem;
    border-radius: 2.4rem;
    background-color: #2e9267;;
`
const Text = styled.div`
    width: fit-content;
    height: fit-content
    font-family: NotoSansCJKkr;
    font-size: 1.4rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
`

export default Enter