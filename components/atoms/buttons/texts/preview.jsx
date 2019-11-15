import React from 'react';
import styled from 'styled-components';

const Preview = (props) => {

    return (
                <Wrapper>
                    <Text>미리보기</Text>
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
    background-color: #61b28f;
    margin-right:0.6rem;
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

export default Preview