import React from 'react';
import styled from 'styled-components';

const Preview = () => {

    return (
                <Wrapper>
                    <Text>시작하기</Text>
                </Wrapper>
    );
  }

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    width: 33.6rem;
    height: 3.8rem;
    border-radius: 2rem;
    border: solid 0.3rem #61b38f;
    margin-bottom:1.1rem;
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
  color: #2e9267;
`

export default Preview